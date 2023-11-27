import { useTranslation } from "react-i18next";

type Props = {
  date: string;
  title: string;
  description: string;
  salary: number;
  experience: number;
  adress: string;
  onClick: () => void;
  employment?: string;
};

function CardVacancies({
  date,
  title,
  description,
  salary,
  experience,
  employment,
  adress,
  onClick,
}: Props) {
  const { t } = useTranslation("common");
  return (
    <div className="cardVacancies">
      <div className="cardVacancies__content">
        <div className="cardVacancies__date">{date}</div>
        <div className="cardVacancies__title">{title}</div>
        <div className="cardVacancies__description">{description}</div>
        <div className="cardVacancies__wrapper">
          <p className="cardVacancies__subtitle">{t("cardVacancies.price")}</p>
          <div className="text">{salary}</div>
        </div>
        <div className="cardVacancies__wrapper">
          <p className="cardVacancies__subtitle">
            {t("cardVacancies.expirience")}
          </p>
          <div className="text">{experience}</div>
        </div>
        {employment && (
          <div className="cardVacancies__wrapper">
            <p className="cardVacancies__subtitle">
              {t("cardVacancies.emloyment")}
            </p>
            <div className="text">{employment}</div>
          </div>
        )}
        <div className="cardVacancies__wrapper">
          <p className="cardVacancies__subtitle">{t("cardVacancies.adress")}</p>
          <div className="text">{adress}</div>
        </div>
      </div>
      <button type="button" onClick={onClick} className="cardVacancies__button">
        Устроиться
      </button>
    </div>
  );
}

export default CardVacancies;

CardVacancies.defaultProps = {
  employment: "",
};
