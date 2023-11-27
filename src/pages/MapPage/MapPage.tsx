import { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";
import "leaflet-boundary-canvas";
import RectangleImg from "common/assets/images/rectangle-map.png";
import RectangleMobileImg from "common/assets/images/reactangle-map-mobile.png";
import { useTranslation } from "react-i18next";
import Map from "pages/MapPage/Map";
import BaseInput from "common/components/Inputs/BaseInput";
import BaseDropdown from "common/components/Inputs/BaseDropdown";

import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  getGroups,
  groupsSelector,
} from "store/features/groupsSlice/groupsSlice";

import CustomButton from "common/components/Buttons/CustomButton/CustomButton";
import useQuery from "hooks/useQuery";
import MobileSearchDrawer from "pages/MapPage/MobileSearchDrawer";
import MarkerCluster from "./MarkerCluster";

import "./styles.scss";

function MapPage() {
  const query = useQuery();
  const [t] = useTranslation("common");
  const [searchValue, setSearchValue] = useState<string>("");
  const [dropdownValue, setDropdownValue] = useState<Array<string>>([]);

  const [mobileSearchDrawerIsOpen, setMobileSearchDrawerISOpen] =
    useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { groups } = useAppSelector(groupsSelector);

  const onCloseMobileSearchDrawer = () => {
    setMobileSearchDrawerISOpen(false);
  };

  useEffect(() => {
    if (query.get("group")) {
      setDropdownValue([query.get("group") as string]);
    }
  }, [query]);

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  // const [show, setShow] = useState(false);

  const dropDownChangeHandler = (event: any) => {
    const {
      target: { value },
    } = event;
    setDropdownValue(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
    );
  };

  const redirectClickHandler = () => {
    window.location.href = "#";
  };

  const openSearchDrawerHandler = () => {
    setMobileSearchDrawerISOpen(true);
  };

  return (
    <div className="mapPage">
      <img className="rectangle" src={RectangleImg} alt="rectangle" />
      <img
        className="rectangle-mobile"
        src={RectangleMobileImg}
        alt="rectangle"
      />
      {/* <div className="containerMobile filtersWrapperMobile">
        <div className="mapPage__searchFormMobbile">
          <h1 className="title">{t("map.title")}</h1>
          <BaseInput
            onclick={() => setShow((prev) => !prev)}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={t("map.placehlderSearch")}
          />
          {show && (
            <div className="mapPage__dropdownWrapper">
              <BaseDropdown
                values={dropdownValue}
                onChange={dropDownChangeHandler}
                placeholder={t("map.placeholderVacancy")}
                options={groups}
              />
            </div>
          )}
        </div>
      </div> */}

      <MobileSearchDrawer
        className="fff"
        open={mobileSearchDrawerIsOpen}
        onClose={onCloseMobileSearchDrawer}
        dropdownValue={dropdownValue}
        searchValue={searchValue}
        dropDownChangeHandler={dropDownChangeHandler}
        setSearchValue={setSearchValue}
      />

      <div className="mapPage__contentWrapper">
        <MapContainer
          zoom={2}
          className="mapPage__mapContainer"
          center={[51.505, -0.09]}
          maxZoom={12}
          zoomControl={false}
        >
          <Map openSearchDrawer={openSearchDrawerHandler} />
          <MarkerCluster
            dropdownValue={dropdownValue}
            searchValue={searchValue}
          />
          <div className="mapPage__filtersWrapper">
            <div className="mapPage__searchInputWrapper">
              <BaseInput
                value={searchValue}
                placeholder={t("map.placehlderSearch")}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div className="mapPage__filtersInputWrapper">
              <BaseDropdown
                values={dropdownValue}
                onChange={dropDownChangeHandler}
                placeholder={t("map.placeholderVacancy")}
                options={groups}
              />
            </div>
            <CustomButton
              onClick={redirectClickHandler}
              text="Отметиться на карте"
            />
          </div>
        </MapContainer>
      </div>
      <div className="mapPage__buttonWrapper">
        <CustomButton
          onClick={redirectClickHandler}
          text="Отметиться на карте"
        />
      </div>
    </div>
  );
}

export default MapPage;
