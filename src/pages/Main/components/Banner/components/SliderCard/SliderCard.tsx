import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ReactComponent as UsersIcon } from "common/assets/icons/sliderIcons/users.svg";
import { ReactComponent as SearchIcon } from "common/assets/icons/sliderIcons/search.svg";

import { ReactComponent as LocationIcon } from "common/assets/icons/sliderIcons/location.svg";

import { ReactComponent as StarIcon } from "common/assets/icons/sliderIcons/star.svg";

import { ReactComponent as SettingsIcon } from "common/assets/icons/sliderIcons/settings.svg";

import SliderDescriptionItem from "./SliderDescriptionItem";

import "./styles.scss";

type Props = {
  name: string;
  img: string;
  usersCount: number;
  mapCount: number;
};

function SliderCard({ name, img, usersCount, mapCount }: Props) {
  const [t] = useTranslation("common");
  const elements = [
    {
      icon: UsersIcon,
      title: `${usersCount} ${t("sliderCard.participant")}`,
      descr: t("sliderCard.group"),
      link: "#",
    },
    {
      icon: SearchIcon,
      title: t("sliderCard.insider"),
      descr: t("sliderCard.vacancies"),
      link: `vacancies?group=${name}`,
    },
    {
      icon: LocationIcon,
      title: t("sliderCard.mapTitle"),
      descr: `${mapCount}  ${t("sliderCard.mapDescr")}`,
      link: `map?group=${name}`,
    },
    {
      icon: StarIcon,
      title: t("sliderCard.meetupTitle"),
      descr: t("sliderCard.meetupDescr"),
      link: `meetups?group=${name}`,
    },
    {
      icon: SettingsIcon,
      title: t("sliderCard.jointTitle"),
      descr: t("sliderCard.jointDescr"),
      link: "common-projects",
    },
  ];

  return (
    <div className="sliderCard">
      <div className="sliderCard__openedCardTitleWrapper">
        <h3 className="sliderCard__openedCardTitle">{name}</h3>
        <img className="sliderCard__openedCardImage" src={img} alt="logo" />
      </div>
      <div className="sliderCard__contentWrapper">
        {elements.map(({ title, icon, descr, link }) => (
          <div className="sliderCard__elementWrapper" key={title}>
            <NavLink className="sliderCard__elementLink" to={link}>
              <SliderDescriptionItem title={title} Icon={icon} descr={descr} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderCard;
