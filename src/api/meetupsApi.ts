import http from "api/http-common";
import Meetup from "models/meetup";

const getMeetups = () => {
  return http.get<Array<Meetup>>("/meetups");
};

const getMeetupById = (id: number | string) => {
  return http.get<Meetup>(`/meetups/${id}`);
};

const MeetupsService = {
  getMeetups,
  getMeetupById,
};

export default MeetupsService;
