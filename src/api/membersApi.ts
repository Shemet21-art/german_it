import http from "api/http-common";

const getMembers = () => {
  return http.get("/membersCount");
};

const MembersService = {
  getMembers,
};

export default MembersService;
