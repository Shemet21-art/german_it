import MeetupImg from "common/assets/images/vacancy/vacancyIcon.png";
import Rectangle from "common/assets/images/rectangle-meetup.png";
import RectangleMobile from "common/assets/images/rectangle-mobile-meetup.png";

import BadgeWithIcon from "common/components/Badges/BadgeWithIcon";
import VideoIcon from "common/assets/icons/video.svg";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Badge from "common/components/Badges/Badge";

import "./styles.scss";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import {
  getMeetupId,
  meetupSelector,
  resetMeetup,
} from "store/features/meetupSlice/meetupSlice";
import { CircularProgress } from "@mui/material";

function Meetup() {
  const [t] = useTranslation("common");
  const { meetupId } = useParams();
  const dispatch = useAppDispatch();

  const { meetup, loading } = useAppSelector(meetupSelector);

  useEffect(() => {
    if (meetupId) {
      dispatch(getMeetupId(meetupId));
    }

    return () => {
      dispatch(resetMeetup());
    };
  }, [dispatch, meetupId]);

  return loading ? (
    <CircularProgress />
  ) : (
    <div className="meetup">
      <img className="rectangle" src={Rectangle} alt="rectangle" />
      <img className="rectangle-mobile" src={RectangleMobile} alt="rectangle" />
      <div className="container">
        <div className="meetup__header">
          <h1 className="title">{meetup && meetup.title}</h1>
          <div className="meetup__btnsWrapper">
            {meetup && meetup.type && (
              <div className="meetup__onlineEventIconWrapper">
                <BadgeWithIcon icon={VideoIcon} text="Online Event" />
              </div>
            )}
            {meetup && meetup.members && (
              <div className="meetup__attendees">
                <Badge text={`${meetup.members} attendees`} />
              </div>
            )}
          </div>
        </div>
        <div className="meetup__content">
          <div className="meetup__leftContent">
            <img src={(meetup && meetup.imgUrl) || MeetupImg} alt="meetup" />
            <p className="meetup__description text">
              {meetup && meetup.shortDescription}
            </p>
            <p className="meetup__description text">
              {meetup && meetup.longDescription}
            </p>
            <p className="meetup__date title-gradient text">
              {meetup && meetup.date}
            </p>
          </div>
          <div className="meetup__rightContent">
            <h2 className="subtitle">{t("meetup.speakers")}</h2>
            <div className="meetup__speakers">
              {meetup &&
                meetup.speakers.map(({ imgUrl, name, description }: any) => (
                  <div className="meetup__card">
                    <img src={imgUrl} alt="avatar" />
                    <div className="meetup__cardContent">
                      <h5>{name}</h5>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meetup;
