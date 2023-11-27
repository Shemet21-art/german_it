import { useAppSelector } from "hooks/reduxHooks";
import useQuery from "hooks/useQuery";
import Vacancy from "models/vacany";
import { ChangeEvent, useEffect, useState } from "react";
import { vacanciesSelector } from "store/features/vacanciesSlice/vacanciesSlice";
import getFilteredResults from "utils/getFilteredResults";
import VacanciesBoardBody from "./VacanciesBoardBody/VacanciesBoardBody";
import VacanciesBoardHeader from "./VacanciesBoardHeader/VacanciesBoardHeader";

function VacanciesBoard() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [dropDownValue, setDropdownValue] = useState<Array<string>>([]);

  const { vacancies } = useAppSelector(vacanciesSelector);
  const query = useQuery();

  useEffect(() => {
    if (query.get("group")) {
      setDropdownValue([query.get("group") as string]);
    }
  }, [query]);

  const [searchResults, setSearchResults] = useState<Array<Vacancy>>([]);

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
    let results;
    results = vacancies.filter(
      (vacancy) =>
        getFilteredResults(vacancy.title, searchInputValue) ||
        getFilteredResults(vacancy.city, searchInputValue) ||
        getFilteredResults(vacancy.date, searchInputValue) ||
        getFilteredResults(vacancy.salary.toString(), searchInputValue) ||
        getFilteredResults(vacancy.longDescription, searchInputValue) ||
        getFilteredResults(vacancy.shortDescription, searchInputValue) ||
        getFilteredResults(vacancy.expYears.toString(), searchInputValue),
    );

    if (dropDownValue.length) {
      results = results.filter((meetup) => {
        return dropDownValue.includes(meetup.group);
      });
    }

    setSearchResults(results);
  }, [dropDownValue, searchInputValue, vacancies]);

  return (
    <>
      <VacanciesBoardHeader
        searchValue={searchInputValue}
        searchOnChange={searchInputChangeHandler}
        dropdownValue={dropDownValue}
        dropdownOnChange={dropDownChangeHandler}
      />
      <VacanciesBoardBody vacancies={searchResults} />
    </>
  );
}

export default VacanciesBoard;
