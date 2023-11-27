import CardMeetup from "common/components/Cards/CardMeetup";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Meetup from "models/meetup";
import { meetupsSelector } from "store/features/meetupsSlice/metupsSlice";
import { useAppSelector } from "hooks/reduxHooks";
import { CircularProgress } from "@mui/material";

import "./styles.scss";

type Props = {
  meetups: Array<Meetup>;
};

function BoardBody({ meetups }: Props) {
  const [t] = useTranslation("common");

  const { loading } = useAppSelector(meetupsSelector);

  const navigate = useNavigate();

  const onClick = (id: string | number) => {
    navigate(id.toString());
  };

  return (
    <div className="boardBody">
      {loading && <CircularProgress />}
      {meetups.length ? (
        meetups.map(
          ({
            id,
            imgUrl,
            date,
            title,
            shortDescription,
            type,
            speakers,
            members,
          }) => (
            <div
              className="boardBody__cardWrapper"
              key={id}
              onClick={() => onClick(id)}
            >
              <CardMeetup
                previewImg={imgUrl}
                date={date}
                title={title}
                text={shortDescription}
                isOnlineEvent={type}
                attendees={members}
                users={speakers}
              />
            </div>
          ),
        )
      ) : (
        <div>{t("error.text")}</div>
      )}
    </div>
  );
}

export default BoardBody;
