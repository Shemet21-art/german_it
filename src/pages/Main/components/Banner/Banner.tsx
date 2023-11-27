import { useEffect, useRef } from "react";
import RectangleImg from "common/assets/images/rectangle.png";
import RectangleMobile from "common/assets/images/banner-rectangle-mpbile.png";
import { useTranslation } from "react-i18next";
import ComputerImg from "common/assets/images/computer.svg";
import LampImg from "common/assets/images/lamp.svg";
import ArrowButton from "common/components/Buttons/ArrowButton/ArrowButton";
import CustomButtonWithPopover from "common/components/Buttons/CustomButton/CustomButtonWithPopover";
import Slider from "react-slick";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  getMembers,
  membersSelector,
} from "store/features/membersSlice/membersSlice";
import GroupImg from "common/assets/images/logo.svg";

import SliderCard from "./components/SliderCard/SliderCard";

import "./styles.scss";

function Banner() {
  const dispatch = useAppDispatch();
  const [t] = useTranslation("common");

  const { members } = useAppSelector(membersSelector);

  // const [activeSlide, setActiveSlide] = useState<number>(0);

  const ref = useRef(null);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    swipe: true,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoPlaySpeed: 3000,
    // variableWidth: true,
    // beforeChange: (current: number, next: number) => setActiveSlide(next),
  };

  const click = (side: "next" | "prev") => {
    if (side === "prev") {
      (ref?.current as any)?.slickPrev();
    }
    if (side === "next") {
      (ref?.current as any)?.slickNext();
    }
  };

  // const getSelectedGroupMembersCount = () => {
  //   if (members) {
  //     return members[activeSlide].countGroups;
  //   }

  //   return 0;
  // };

  const sumOfMembers = () => {
    return members
      ?.map((item) => item.countGroups)
      .reduce((acc, item) => {
        return acc + item;
      }, 0);
  };

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return (
    <div className="banner">
      <img className="rectangle" src={RectangleImg} alt="" />
      <img
        src={RectangleMobile}
        alt="mobile rect"
        className="rectangleMobile"
      />
      <div className="container">
        <div className="banner__leftBlock">
          <h1 className="title">
            {t("banner.title")}

            <br />
            <span className="title-gradient">{t("banner.title-gradient")}</span>
          </h1>
          <p className="banner__subTitle">{t("banner.subTitle")}</p>
          <CustomButtonWithPopover
            count={sumOfMembers() || 0}
            text="Присоединиться"
          />
        </div>
        <div className="banner__rightBlock">
          <Slider {...settings} ref={ref}>
            {members?.map(({ countGroups, countMaps, name }) => (
              <div
                className="banner__sliderCardWrapper"
                style={{ width: 200 }}
                key={name}
              >
                <SliderCard
                  name={name}
                  img={GroupImg}
                  usersCount={countGroups}
                  mapCount={countMaps}
                />
              </div>
            ))}
          </Slider>
          <div className="banner__btnsWrapper">
            <ArrowButton side="prev" onClick={() => click("prev")} />
            <ArrowButton side="next" onClick={() => click("next")} />
          </div>
          <img src={LampImg} alt="lamp" className="banner__lampImg" />
        </div>
        <img src={ComputerImg} className="banner__compImg" alt="computer" />
      </div>
    </div>
  );
}

export default Banner;
