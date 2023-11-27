import L from "leaflet";

import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useEffect } from "react";

import { useMap } from "react-leaflet";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { getMapData, mapDataSelector } from "store/features/mapSlice/mapSlice";

type Props = {
  searchValue: string;
  dropdownValue: Array<string>;
};

const mcg = (L as any).markerClusterGroup();

function MarkerCluster({ searchValue, dropdownValue }: Props) {
  const map = useMap();
  const dispatch = useAppDispatch();
  const mapData = useAppSelector(mapDataSelector);

  useEffect(() => {
    dispatch(getMapData());
  }, [dispatch]);

  useEffect(() => {
    mcg.clearLayers();
    const filteredData = mapData?.features.filter(
      (feature) => feature.geometry.coordinates[0] !== null,
    );

    let filteredResults = filteredData
      ?.filter((dateAbout) => dateAbout.properties.about !== null)
      .filter((dateCity) => dateCity.properties.city !== null);

    filteredResults = filteredResults?.filter(
      (k) =>
        k.properties.name
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        k.properties.city
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        k.properties.about
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase()),
    );
    if (dropdownValue.length) {
      filteredResults = filteredResults?.filter((res) => {
        return dropdownValue.includes(res.properties.group);
      });
    }

    filteredResults?.forEach((data) =>
      L.marker(
        new L.LatLng(
          data.geometry.coordinates[1] as unknown as number,
          data.geometry.coordinates[0] as unknown as number,
        ),
        {
          icon: new L.Icon({
            iconUrl:
              "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
            iconSize: [25, 41],
            iconAnchor: [10, 41],
            popupAnchor: [2, -40],
          }),
        },
      )
        .addTo(mcg)
        .bindPopup(
          `<h2>${data.properties.name}</h2><h3>${data.properties.city}</h3><p>${
            data.properties.about || ""
          }</p>`,
        ),
    );

    map.addLayer(mcg);
  }, [dropdownValue, map, mapData?.features, searchValue]);

  return null;
}

export default MarkerCluster;
