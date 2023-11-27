import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import CalendarIcon from "common/assets/icons/sliderIcons/DatePickerIcon.svg";

import "react-datepicker/dist/react-datepicker.css";

import { InputAdornment, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",

    "& .MuiInputBase-root": {
      background: `linear-gradient(
       111.68deg,
      rgba(255, 255, 255, 0.8) 7.59%,
       rgba(255, 255, 255, 0.5) 102.04%
      )`,
      boxShadow: "0px 15px 60px rgba(70, 61, 128, 0.2)",
      borderRadius: 50,
      paddingRight: 0,
    },

    "& .MuiInputBase-input": {
      padding: "19px 0 19px 40px",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },

  popper: {
    zIndex: 200000,
  },
}));

function InputTest({ ref, onClick, value }: any) {
  const [t] = useTranslation("common");
  const classes = useStyles();
  return (
    <TextField
      placeholder={t("datePicker.placeholder")}
      ref={ref}
      onClick={onClick}
      value={value}
      className={classes.root}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <img
              style={{
                cursor: "pointer",
              }}
              src={CalendarIcon}
              alt="CalendarIcon"
            />
          </InputAdornment>
        ),
      }}
    />
  );
}

function DatePickerTest({ dateRange, onChange }: any) {
  const ExampleCustomInput = forwardRef(({ onClick, value }: any, ref) => (
    <InputTest ref={ref} onClick={onClick} value={value} />
  ));

  const classes = useStyles();

  const [startDate, endDate] = dateRange;

  console.log(dateRange);
  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      popperClassName={classes.popper}
      endDate={endDate}
      placeholderText="dd/MM/yyyy"
      customInput={<ExampleCustomInput />}
      onChange={onChange}
    />
  );
}

export default DatePickerTest;
