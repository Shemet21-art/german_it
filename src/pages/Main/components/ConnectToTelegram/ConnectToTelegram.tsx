import TelegramImg from "common/assets/images/telegram-image.png";
import { useTranslation } from "react-i18next";
import CustomButtonWithIcon from "common/components/Buttons/CustomButton/CustomButtonWithIcon";
import TelegramIcon from "common/assets/icons/telegram.png";
import Rectangle from "common/assets/images/rectangle-telegram-block.png";
import RectangleMobile from "common/assets/images/telegram-rectangle-mobile.png";

import "./styles.scss";

function ConnectToTelegram() {
  const [t] = useTranslation("common");
  return (
    <div className="connectToTelegram">
      <img
        className="connectToTelegram__rectangle"
        src={Rectangle}
        alt="rectangle"
      />
      <img
        className="connectToTelegram__rectangleMobile"
        src={RectangleMobile}
        alt="rectangle"
      />
      <div className="container">
        <div className="connectToTelegram__left">
          <h1 className="title">
            {t("communities.connectToTelegramTitle")}
            <span className="title-gradient">Telegram</span>
          </h1>
          <p className="text">{t("communities.connectToTelegramText")}</p>
          <CustomButtonWithIcon
            text="Перейти в Telegram"
            icon={TelegramIcon}
            position="right"
          />
        </div>
        <img src={TelegramImg} className="telegramImg" alt="Telegram" />
      </div>
    </div>
  );
}

export default ConnectToTelegram;
