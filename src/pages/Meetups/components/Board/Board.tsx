import { useAppSelector } from "hooks/reduxHooks";
import { ChangeEvent, useEffect, useState } from "react";
import Meetups from "models/meetup";
import { meetupsSelector } from "store/features/meetupsSlice/metupsSlice";
import moment from "moment";
import getFilteredResults from "utils/getFilteredResults";
import useQuery from "hooks/useQuery";
import { BoardHeader, BoardBody } from "./components";

function Board() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const onChangeDatePicker = (values: any) => {
    setDateRange(values);
  };

  const query = useQuery();
  const { meetups } = useAppSelector(meetupsSelector);

  const [searchInputValue, setSearchInputValue] = useState("");

  const [dropDownValue, setDropdownValue] = useState<Array<string>>([]);

  const [searchResults, setSearchResult] = useState<Array<Meetups>>([]);

  const searchInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const dropDownChangeHandler = (event: any) => {
    const {
      target: { value },
    } = event;
    setDropdownValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  useEffect(() => {
    if (query.get("group")) {
      setDropdownValue([query.get("group") as string]);
    }
  }, [query]);

  useEffect(() => {
    let results = meetups.filter(
      (meetup) =>
        getFilteredResults(meetup.title, searchInputValue) ||
        getFilteredResults(meetup.city, searchInputValue) ||
        getFilteredResults(meetup.date, searchInputValue) ||
        getFilteredResults(meetup.group, searchInputValue) ||
        getFilteredResults(meetup.shortDescription, searchInputValue) ||
        getFilteredResults(meetup.longDescription, searchInputValue),
    );
    if (dateRange[0] !== null || dateRange[1] !== null) {
      const dateStart = moment(dateRange[0]).format("YYYY-MM-DD");
      const dateEnd = moment(dateRange[1]).format("YYYY-MM-DD");

      results = results.filter((meetup) => {
        return meetup.date >= dateStart && meetup.date <= dateEnd;
      });
    }
    if (dropDownValue.length) {
      results = results.filter((meetup) => {
        return dropDownValue.includes(meetup.group);
      });
    }
    setSearchResult(results);
  }, [searchInputValue, meetups, dateRange, dropDownValue]);

  return (
    <div className="board">
      <BoardHeader
        dateRange={dateRange}
        onChangeDateRange={onChangeDatePicker}
        searchValue={searchInputValue}
        searchOnChange={searchInputChangeHandler}
        dropdownValue={dropDownValue}
        dropdownOnChange={dropDownChangeHandler}
      />
      <BoardBody meetups={searchResults} />
    </div>
  );
}

export default Board;
