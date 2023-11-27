import TelegramIcon from "common/assets/images/footer/telegramm.svg";
import FacebookIcon from "common/assets/images/footer/facebook.svg";
import TwitterIcon from "common/assets/images/footer/twitter.svg";

import "./styles.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function Footer() {
  const { t } = useTranslation("common");

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__nav">
          <NavLink to="/" className="text">
            {t("navbar.main")}
          </NavLink>
          <NavLink to="meetups" className="text">
            {t("navbar.meetups")}
          </NavLink>
          <NavLink to="map" className="text">
            {t("navbar.map")}
          </NavLink>
        </div>
        <div className="footer__nav">
          <NavLink to="common-projects" className="text">
            {t("navbar.projects")}
          </NavLink>
          <NavLink to="vacancies" className="text">
            {t("navbar.vacancies")}
          </NavLink>
          <NavLink to="contacts" className="text">
            {t("navbar.contacts")}
          </NavLink>
        </div>
        <div className="footer__rightContent">
          <div className="footer__iconsWrapper">
            <img src={TelegramIcon} alt="telegram" />
            <img src={TwitterIcon} alt="twitter" />
            <img src={FacebookIcon} alt="facebook" />
          </div>
          <p className="text">{t("footer.text")}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
