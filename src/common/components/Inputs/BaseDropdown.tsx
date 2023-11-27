// import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Button } from "@mui/material";
import { ReactComponent as CloseIcon } from "common/assets/icons/close.svg";
import DropdownIcon from "common/assets/icons/sliderIcons/dropdownIcon.svg";
import { useState } from "react";

type Props = {
  options: Array<string>;
  values: Array<string>;
  placeholder: string;
  onChange: (event: any) => void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectPlaceholder({
  options,
  values,
  placeholder,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div>
      <FormControl
        sx={{
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
        }}
      >
        <Select
          sx={{
            zIndex: 100000,
          }}
          open={open}
          onClose={toggle}
          onOpen={toggle}
          multiple
          displayEmpty
          value={values}
          onChange={onChange}
          MenuProps={{
            style: {
              zIndex: 100000000,
            },
            ...MenuProps,
          }}
          inputProps={{ "aria-label": "Without label" }}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em style={{ color: "gray" }}>{placeholder}</em>;
            }

            return selected.join(", ");
          }}
          // eslint-disable-next-line react/no-unstable-nested-components
          IconComponent={(props) => (
            <img
              style={{
                top: 0,
                right: 0,
                cursor: "pointer",
              }}
              src={DropdownIcon}
              alt="dropdown icon"
              {...props}
            />
          )}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <MenuItem disabled value="">
              <em>{placeholder}</em>
            </MenuItem>
            <Button onClick={toggle}>
              <CloseIcon />
            </Button>
          </div>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
