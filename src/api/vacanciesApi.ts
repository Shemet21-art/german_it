import http from "api/http-common";
import Vacancy from "models/vacany";

const getVacancies = () => {
  return http.get<Array<Vacancy>>("/vacancies");
};

const getVacancyById = (id: number | string) => {
  return http.get<Vacancy>(`/vacancies/${id}`);
};

const VacanciesService = {
  getVacancies,
  getVacancyById,
};

export default VacanciesService;
