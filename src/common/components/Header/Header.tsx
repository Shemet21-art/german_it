import { useState } from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import LogoImg from "common/assets/images/logo.svg";
import SideDrawer from "common/components/SideDrawer/SideDrawer";
import { ReactComponent as MenuIcon } from "common/assets/icons/menu-icon.svg";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation, TFunction } from "react-i18next";
import RuFlag from "common/assets/icons/flags/russia.png";
import GeFlag from "common/assets/icons/flags/germany.png";
import EnFlag from "common/assets/icons/flags/united-kingdom.png";

import "./styles.scss";

const navItemList = (t: TFunction) => [
  {
    text: t("navbar.main"),
    to: "/",
  },
  {
    text: t("navbar.meetups"),
    to: "meetups",
  },
  {
    text: t("navbar.map"),
    to: "map",
  },
  {
    text: t("navbar.projects"),
    to: "common-projects",
  },
  {
    text: t("navbar.vacancies"),
    to: "vacancies",
  },
  {
    text: t("navbar.contacts"),
    to: "contacts",
  },
  {
    text: t("navbar.imressum"),
    to: "impressum",
  },
];

const langMenuItems = [
  { name: "ru", img: RuFlag },
  {
    name: "en",
    img: EnFlag,
  },
  { name: "de", img: GeFlag },
];

function Header() {
  const [t, i18n] = useTranslation("common");
  const [open, setOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "ru",
  );

  const openDrawerHandler = () => {
    setOpen(true);
  };

  const closeDrawerHandler = () => {
    setOpen(false);
  };

  const onLanguageChange = (e: SelectChangeEvent) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
    window.location.reload();
  };

  return (
    <>
      <header className="header container">
        <div className="header__leftContent">
          <NavLink to="/">
            <img className="header__logo" src={LogoImg} alt="logo" />
          </NavLink>
          <Select
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiSelect-select": {
                display: "flex",
                textTransform: "uppercase",
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={onLanguageChange}
          >
            {langMenuItems.map(({ name, img }) => (
              <MenuItem key={name} value={name}>
                <img className="header__flagImg" src={img} alt="flag" />
                {name}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div className="header__nav">
          {navItemList(t).map(({ text, to }) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__navItem active" : "header__navItem"
              }
              to={to}
              key={to}
              end
            >
              {text}
            </NavLink>
          ))}
        </div>
        <IconButton
          className="header__menuBtn"
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawerHandler}
          edge="start"
        >
          <MenuIcon className="header__menuIcon" />
        </IconButton>
      </header>
      <SideDrawer open={open} onClose={closeDrawerHandler}>
        {navItemList(t).map(({ text, to }) => (
          <NavLink
            onClick={closeDrawerHandler}
            className={({ isActive }) =>
              isActive ? "header__navItem active" : "header__navItem"
            }
            to={to}
            key={to}
            end
          >
            {text}
          </NavLink>
        ))}
      </SideDrawer>
    </>
  );
}

export default Header;
