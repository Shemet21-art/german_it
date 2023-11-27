import { ChangeEvent, useEffect } from "react";
import BaseInput from "common/components/Inputs/BaseInput";

import BaseDropdown from "common/components/Inputs/BaseDropdown";

import { useTranslation } from "react-i18next";

import "./style.scss";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  getGroups,
  groupsSelector,
} from "store/features/groupsSlice/groupsSlice";

type Props = {
  searchValue: string;
  searchOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  dropdownValue: Array<string>;
  dropdownOnChange: any;
};

function VacanciesBoardHeader({
  searchValue,
  searchOnChange,
  dropdownValue,
  dropdownOnChange,
}: Props) {
  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();

  const { groups } = useAppSelector(groupsSelector);

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  return (
    <div className="vacanciesHeader">
      <div className="vacanciesHeader__searchInputWrapper">
        <BaseInput
          value={searchValue}
          onChange={searchOnChange}
          placeholder="Поиск"
        />
      </div>
      <div className="vacanciesHeader__inputWrapper">
        <BaseDropdown
          placeholder={t("meetups.dropdown")}
          values={dropdownValue}
          onChange={dropdownOnChange}
          options={groups}
        />
      </div>
    </div>
  );
}

export default VacanciesBoardHeader;
