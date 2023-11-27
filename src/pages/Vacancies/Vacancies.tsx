import VacanciesBoard from "pages/Vacancies/components";
import RectangleMobile from "common/assets/images/vacancies-mobile-rectangle.png";
import { useEffect } from "react";
import {
  getVacancies,
  resetVacancies,
} from "store/features/vacanciesSlice/vacanciesSlice";
import { useAppDispatch } from "hooks/reduxHooks";

import "./style.scss";
import { useTranslation } from "react-i18next";

function Vacancies() {
  const [t] = useTranslation("common");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVacancies());

    return () => {
      dispatch(resetVacancies());
    };
  }, [dispatch]);

  return (
    <div className="vacancies">
      <img className="rectangle-mobile" src={RectangleMobile} alt="rectangle" />
      <div className="container">
        <div className="vacancies__titleWrapper">
          <h1 className="title">{t("vacansies.title")}</h1>
          <p className="vacancies__text">{t("vacansies.text")}</p>
        </div>
        <div className="vacancies__inputWrapper">
          <VacanciesBoard />
        </div>
      </div>
    </div>
  );
}
export default Vacancies;
