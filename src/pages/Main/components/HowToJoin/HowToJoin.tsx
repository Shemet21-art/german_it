import Card from "common/components/Cards/Card";
import TelegramImg from "common/assets/images/howToJoin/telegram.svg";
import TopLineImg from "common/assets/images/howToJoin/top-line.png";
import PositionImg from "common/assets/images/howToJoin/position.svg";
import { useTranslation } from "react-i18next";
import PhoneImg from "common/assets/images/howToJoin/phone.svg";
import BottomLineImg from "common/assets/images/howToJoin/bottom-line.png";
import TopLineMobileImg from "common/assets/images/line-mobile-top.png";
import BottomLineMobileImg from "common/assets/images/line-mobile-bottom.png";

import "./styles.scss";

function HowToJoin() {
  const [t] = useTranslation("common");
  return (
    <div className="container">
      <div className="howToJoin ">
        <h1 className="title">{t("communities.howToJoinTitle")}</h1>
        <div className="howToJoin__cardsWrapper">
          <div className="howToJoin__topCardWrapper">
            <Card
              title={t("communities.howToJoinTelegram")}
              text={t("communities.howToJoinTelegramText")}
              icon={TelegramImg}
            />
            <img
              className="howToJoin__topLine"
              src={TopLineImg}
              alt="top line"
            />
            <img
              className="howToJoin__topLineMobile"
              src={TopLineMobileImg}
              alt="top line"
            />
          </div>
          <div className="howToJoin__middleCardWrapper">
            <Card
              title={t("communities.howToJoinMap")}
              text={t("communities.howToJoinMapText")}
              icon={PositionImg}
            />
          </div>
          <div className="howToJoin__bottomCardWrapper">
            <Card
              title={t("communities.howToJoinMeeting")}
              text={t("communities.howToJoinMeetingText")}
              icon={PhoneImg}
            />
            <img
              className="howToJoin__bottomLine"
              src={BottomLineImg}
              alt="bottom line"
            />
            <img
              className="howToJoin__bottomLineMobile"
              src={BottomLineMobileImg}
              alt="top line"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToJoin;
