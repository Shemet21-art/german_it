import Reactangle from "common/assets/images/rectangle.png";
import ReactangleMobile from "common/assets/images/rectangle-meetups-mobile.png";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "hooks/reduxHooks";
import { useEffect } from "react";
import { getMeetups } from "store/features/meetupsSlice/metupsSlice";
import Board from "./components/Board/Board";

import "./styles.scss";

function Meetups() {
  const [t] = useTranslation("common");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMeetups());
  }, [dispatch]);
  return (
    <div className="meetups">
      <img className="rectangle" src={Reactangle} alt="rectangle" />
      <img
        className="rectangle-mobile"
        src={ReactangleMobile}
        alt="rectangle mobile"
      />

      <div className=" container">
        <h1 className="title">{t("meetups.title")}</h1>
        <Board />
      </div>
    </div>
  );
}

export default Meetups;
