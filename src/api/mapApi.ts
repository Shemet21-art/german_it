import IMapData from "models/mapData";
import http from "./http-common";

const getMapData = () => {
  return http.get<IMapData>("/map");
};

const MapService = {
  getMapData,
};

export default MapService;
