import BaseDropdown from "common/components/Inputs/BaseDropdown";
import BaseInput from "common/components/Inputs/BaseInput";
import BaseInputGroup from "common/components/Inputs/BaseInpuGroup";
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  getGroups,
  groupsSelector,
} from "store/features/groupsSlice/groupsSlice";

import "./styles.scss";
import DatePickerTest from "common/components/Inputs/DatePickerTest";

type Props = {
  searchValue: string;
  searchOnChange: (e: ChangeEvent<HTMLInputElement>) => void;

  dropdownValue: Array<string>;
  dropdownOnChange: any;
  dateRange: [Date | null, Date | null];
  onChangeDateRange: (value: Date | null) => void;
};

function BoardHeader({
  dateRange,
  onChangeDateRange,
  searchValue,
  searchOnChange,

  dropdownValue,
  dropdownOnChange,
}: Props) {
  const [t] = useTranslation("common");
  const dispatch = useAppDispatch();

  const { groups } = useAppSelector(groupsSelector);

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  const [show, setShow] = useState(false);

  return (
    <div className="boardHeader">
      <div className="boardHeader__searchWrapper">
        <div className="boardHeader__searchInputWrapper">
          <BaseInput
            value={searchValue}
            onChange={searchOnChange}
            placeholder={t("meetups.input")}
          />
        </div>
        <div className="boardHeader__inputWrapper">
          <DatePickerTest dateRange={dateRange} onChange={onChangeDateRange} />
        </div>
        <div className="boardHeader__inputWrapper">
          <BaseDropdown
            placeholder={t("meetups.dropdown")}
            values={dropdownValue}
            onChange={dropdownOnChange}
            options={groups}
          />
        </div>
      </div>
      <div className="boardHeader__searchInputMobbile">
        <div className="boardHeader__dropInput">
          <BaseInputGroup
            onclick={() => setShow((prev) => !prev)}
            value={searchValue}
            onChange={searchOnChange}
            placeholder={t("meetups.input")}
          />
        </div>
        {show && (
          <div className="boardHeader__wrapper">
            <div className="boardHeader__inputWrapper">
              <DatePickerTest
                dateRange={dateRange}
                onChange={onChangeDateRange}
              />
            </div>
            <div className="boardHeader__inputWrapper">
              <BaseDropdown
                placeholder={t("meetups.dropdown")}
                values={dropdownValue}
                onChange={dropdownOnChange}
                options={groups}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default BoardHeader;
