import BaseInput from "common/components/Inputs/BaseInput";
import Rectangle from "common/assets/images/vacancy/rectangle.png";
import RectangleMobile from "common/assets/images/rectangle-mobile-contacts.png";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TaskIcon from "common/assets/icons/task.png";

import "./styles.scss";
import CustomButton from "common/components/Buttons/CustomButton/CustomButton";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  getVacancyById,
  resetVacansy,
  vacancySelector,
} from "store/features/vacancySlice/vacancySlice";
import { useTranslation } from "react-i18next";

import DefaultVacancyImg from "common/assets/images/vacancy/vacancyIcon.png";
import { CircularProgress } from "@mui/material";

function Vacancy() {
  const [t] = useTranslation("common");
  const { vacancyId } = useParams();
  const dispatch = useAppDispatch();

  const { vacancy, error, loading } = useAppSelector(vacancySelector);

  useEffect(() => {
    if (vacancyId) {
      dispatch(getVacancyById(vacancyId));
    }

    return () => {
      dispatch(resetVacansy());
    };
  }, [dispatch, vacancyId]);

  return (
    <>
      {loading && <CircularProgress />}
      {error && <p>{error}</p>}
      {vacancy && (
        <div className="vacancy">
          <img
            className="rectangle-mobile"
            src={RectangleMobile}
            alt="rectangle_mobile"
          />
          <img className="rectangle" src={Rectangle} alt="rectangle" />
          <div className="container">
            <div className="vacancy__header">
              <h1 className="title">{vacancy && vacancy.title}</h1>
              <p className="title-gradient">{vacancy && vacancy.salary}$</p>
            </div>
            <div className="vacancy__content">
              <div className="vacancy__leftContent">
                <div className="vacancy__description">
                  {vacancy && vacancy.shortDescription}
                </div>
                <div className="vacancy__description">
                  {vacancy && vacancy.longDescription}
                </div>
                <div className="vacancy__descriptionList">
                  <div className="vacancy__wrapperList">
                    <p className="vacancy__listSubtitle">
                      {t("vacancy.price")}
                    </p>
                    <div className="text">{vacancy && vacancy.salary}$</div>
                  </div>
                  <div className="vacancy__wrapperList">
                    <p className="vacancy__listSubtitle">
                      {t("vacancy.experience")}
                    </p>
                    <div className="text">{vacancy && vacancy.expYears}</div>
                  </div>
                  {vacancy && vacancy.employment && (
                    <div className="vacancy__wrapperList">
                      <p className="vacancy__listSubtitle">
                        {t("vacancy.employment")}
                      </p>
                      <div className="text">{vacancy.employment}</div>
                    </div>
                  )}
                  <div className="vacancy__wrapperList">
                    <p className="vacancy__listSubtitle">
                      {t("vacancy.adress")}
                    </p>
                    <div className="text">{vacancy && vacancy.city}</div>
                  </div>
                </div>
              </div>
              <div className="vacancy__rightContent">
                <img
                  src={
                    (vacancy && vacancy.vacancyIcon && vacancy.vacancyIcon) ||
                    DefaultVacancyImg
                  }
                  className="vacancy__vacancyImg"
                  alt="vacancy img"
                />
              </div>
            </div>
            {vacancy && vacancy.tasks && (
              <>
                <h2 className="subtitle"> {t("vacancy.tasks")}</h2>
                <div className="vacancy__tasksWrapper">
                  {vacancy.tasks.map((task: any) => (
                    <div className="vacancy__taskWrapper">
                      <img
                        className="vacancy__taskIcon"
                        src={TaskIcon}
                        alt="Icon"
                      />
                      <p className="text">{task}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            <p className="vacancy__dateText">
              {t("vacancy.dateText")} {vacancy && vacancy.date}
            </p>
            <h2 className="vacancy__subtitle">{t("vacancy.contactsText")}</h2>
            <div className="vacancy__emalInputWrapper">
              <BaseInput value="" placeholder="Email" onChange={() => null} />
              <CustomButton onClick={() => null} text={t("vacancy.btnText")} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Vacancy;
