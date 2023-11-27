import Slider from "react-slick";
import TelegramChatImg from "common/assets/images/telegramChat.png";
import PhoneRectangle from "common/assets/images/phoneBackground.png";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.scss";
import { useRef } from "react";
import ArrowButton from "common/components/Buttons/ArrowButton/ArrowButton";

function Members() {
  const [t] = useTranslation("common");
  const ref = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoPlaySpeed: 5000,
  };

  const click = (side: "next" | "prev") => {
    if (side === "prev") {
      (ref?.current as any)?.slickPrev();
    }
    if (side === "next") {
      (ref?.current as any)?.slickNext();
    }
  };

  return (
    <div className="container">
      <div className="members ">
        <div className="members__sliderWrapper">
          <img
            className="members__phoneRect"
            src={PhoneRectangle}
            alt="phone rect"
          />
          <Slider {...settings} ref={ref}>
            <div>
              <img src={TelegramChatImg} alt="telegram chat" />
            </div>
            <div>
              <img src={TelegramChatImg} alt="telegram chat" />
            </div>
            <div>
              <img src={TelegramChatImg} alt="telegram chat" />
            </div>
          </Slider>
          <div className="members__buttonsWrapperMobile">
            <ArrowButton side="prev" onClick={() => click("prev")} />
            <ArrowButton side="next" onClick={() => click("next")} />
          </div>
        </div>
        <div className="members__rightContent">
          <h1 className="title">{t("communities.membersTitle")}</h1>
          <p className="text">{t("communities.membersText")}</p>
          <div className="members__buttonsWrapper">
            <ArrowButton side="prev" onClick={() => click("prev")} />
            <ArrowButton side="next" onClick={() => click("next")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
