import { Dialog, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { forwardRef, useEffect, useState } from "react";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { useAppSelector } from "hooks/reduxHooks";
import { mapDataSelector } from "store/features/mapSlice/mapSlice";
import BaseInputGroup from "common/components/Inputs/BaseInpuGroup";
import BaseDropdown from "common/components/Inputs/BaseDropdown";
import { useTranslation } from "react-i18next";
import { groupsSelector } from "store/features/groupsSlice/groupsSlice";

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function MobileSearchDrawer({
  open,
  onClose,
  searchValue,
  dropdownValue,
  dropDownChangeHandler,
  setSearchValue,
}: any) {
  const mapData = useAppSelector(mapDataSelector);
  const [t] = useTranslation("common");

  const [filteredData, setFilteredData] = useState<any>([]);
  const [show, setShow] = useState(false);

  const { groups } = useAppSelector(groupsSelector);

  useEffect(() => {
    const filteredMapData = mapData?.features.filter(
      (feature) => feature.geometry.coordinates[0] !== null,
    );

    let filteredResults = filteredMapData
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

    setFilteredData(filteredResults || []);
  }, [searchValue, dropdownValue, mapData?.features]);

  console.log(filteredData);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      className="dialog"
    >
      <IconButton
        edge="start"
        color="inherit"
        onClick={onClose}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>

      <BaseInputGroup
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
      {filteredData.map((item: any, index: any) =>
        index % 2 === 1 ? (
          <div className="draweWrapper">
            <h3 className="DrawerTitle">{item.properties.name}</h3>
            <p className="DrawerDescription"> {item.properties.about}</p>
            <p className="DrawerGroup"> {item.properties.group}</p>
          </div>
        ) : (
          <div className="draweWrapperWhite">
            <h3 className="DrawerTitle">{item.properties.name}</h3>
            <p className="DrawerDescription"> {item.properties.about}</p>
            <p className="DrawerGroup"> {item.properties.group}</p>
          </div>
        ),
      )}
    </Dialog>
  );
}

export default MobileSearchDrawer;
