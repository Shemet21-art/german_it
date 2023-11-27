import { useNavigate } from "react-router-dom";
import CardVacancies from "common/components/Cards/CardVacancies";

import "./style.scss";
import { vacanciesSelector } from "store/features/vacanciesSlice/vacanciesSlice";
import { CircularProgress } from "@mui/material";
import { useAppSelector } from "hooks/reduxHooks";
import Vacancy from "models/vacany";
import { useTranslation } from "react-i18next";

type Props = {
  vacancies: Array<Vacancy>;
};

function VacanciesBoardBody({ vacancies }: Props) {
  const [t] = useTranslation("common");

  const { loading, error } = useAppSelector(vacanciesSelector);

  const navigate = useNavigate();

  const onClick = (id: string | number) => {
    navigate(id.toString());
  };

  return (
    <div className="vacancies__cardsWrapper">
      {loading && <CircularProgress />}
      {Boolean(vacancies.length) &&
        vacancies.map(
          ({ id, date, title, shortDescription, salary, expYears, city }) => (
            <div className="vacancies__cardWrapper" key={id}>
              <CardVacancies
                date={date}
                title={title}
                description={shortDescription}
                salary={salary}
                experience={expYears}
                adress={city}
                onClick={() => onClick(id)}
              />
            </div>
          ),
        )}
      {!vacancies.length && !error && <div>{t("error.text")}</div>}
      {error && error}
    </div>
  );
}

export default VacanciesBoardBody;
