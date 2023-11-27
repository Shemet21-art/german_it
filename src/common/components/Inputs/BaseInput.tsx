import { InputAdornment, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { ChangeEvent, MouseEventHandler } from "react";
import SearchIcon from "common/assets/icons/sliderIcons/searchIcon.svg";

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  onclick?: MouseEventHandler;
};

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
}));

function BaseInput({ value, onclick, placeholder, onChange, ...props }: Props) {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <img onClick={onclick} src={SearchIcon} alt="" />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      {...props}
    />
  );
}

BaseInput.defaultProps = {
  placeholder: "",
};

export default BaseInput;
