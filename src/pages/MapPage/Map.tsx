import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
// import data from "common/serverObjects/map-data.json";
import germany from "utils/germany.json";
import { ReactComponent as ZoomInIcon } from "common/assets/icons/zoom-in.svg";
import { ReactComponent as ZoomOutIcon } from "common/assets/icons/zoom-out.svg";
import SearchIcon from "@material-ui/icons/Search";

type Props = {
  openSearchDrawer: () => void;
};

function Map({ openSearchDrawer }: Props) {
  const map = useMap();

  useEffect(() => {
    map.setMinZoom(6.2);
    // map.getCenter();
  }, [map]);

  const zoomInHandler = (e: any) => {
    e.stopPropagation();
    map.setZoom(map.getZoom() + 1);
  };

  const zoomOutHandler = (e: any) => {
    e.stopPropagation();
    map.setZoom(map.getZoom() - 1);
  };

  useEffect(() => {
    const fetchGeoJSON = async () => {
      const response = await fetch(
        "https://cdn.rawgit.com/johan/world.geo.json/34c96bba/countries/DEU.geo.json",
      );
      const geoJSON = await response.json();
      const osm = new (L.TileLayer as any).BoundaryCanvas(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          boundary: germany,
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, UK shape <a href="https://github.com/johan/world.geo.json">johan/word.geo.json</a>',
        },
      );
      map.addLayer(osm);
      const ukLayer = L.geoJSON(geoJSON);
      map.fitBounds(ukLayer.getBounds());
    };
    fetchGeoJSON();
  }, [map]);

  return (
    <div className="mapButtons">
      <button className="mapDrawerbtn" type="button" onClick={openSearchDrawer}>
        <SearchIcon />
      </button>
      <button type="button" onClick={zoomInHandler}>
        <ZoomInIcon />
      </button>
      <button type="button" onClick={zoomOutHandler}>
        <ZoomOutIcon />
      </button>
    </div>
  );
}

export default Map;
