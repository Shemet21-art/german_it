import RectangeleMobile from "common/assets/images/rectangle-mobile-impressum.png";
import RectangeleImpressum from "common/assets/images/impressum/rectangle-impressum.png";
import { useTranslation } from "react-i18next";

import "./styles.scss";

function Impressum() {
  const [t] = useTranslation("common");
  return (
    <div className="impressum">
      <img
        className="impressum__rectangle"
        src={RectangeleImpressum}
        alt="rectangle - impressum"
      />
      <img
        className="impressum__rectangle-mobile"
        src={RectangeleMobile}
        alt="rectangle mobile"
      />
      <div className="container">
        <div className="impressum__contentWrapper">
          <div className="impressum__leftContent">
            <h1 className="title">{t("impressum.title")}</h1>
            <p className="impressum__adressText">{t("impressum.adressText")}</p>
            <div className="impressum__name">
              <h3 className="title-gradient subtitle">
                {t("impressum.subtitle")}
              </h3>
              <p className="text">{t("impressum.name")}</p>
            </div>
            <div className="impressum__kontact">
              <h3 className="title-gradient subtitle">
                {t("impressum.contact")}
              </h3>
              <p className="text">{t("impressum.telefon")} +49 17624224368</p>
              <p className="text">E-Mail: edgarlinde@web.de</p>
            </div>
          </div>
          <div className="impressum__rightContent">
            <div className="impressum__linksText">
              <h3 className="title-gradient subtitle">
                {t("impressum.linksText")}
              </h3>
              <p className="text"> {t("impressum.textBlockOne")}</p>
            </div>
            <div className="impressum__datensText">
              <h3 className="title-gradient subtitle">Datenschutz</h3>
              <p className="text">{t("impressum.textBlockTwo")}</p>
            </div>
            <div className="impressum__analiticsText">
              <h3 className="title-gradient subtitle">Google Analytics</h3>
              <p className="text">{t("impressum.textBlockThree")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
