// import CustomButtonWithIcon from "common/components/Buttons/CustomButton/CustomButtonWithIcon";
import VideoIcon from "common/assets/icons/video.svg";
import Badge from "common/components/Badges/Badge";
import "./styles.scss";
import BadgeWithIcon from "common/components/Badges/BadgeWithIcon";

type Props = {
  previewImg: string;
  date: string;
  title: string;
  text: string;
  isOnlineEvent: string;
  users: Array<any>;
  attendees: number;
};

function CardMeetup({
  previewImg,
  date,
  title,
  text,
  isOnlineEvent,
  users,
  attendees,
}: Props) {
  return (
    <div className="cardMeetup">
      <img className="cardMeetup__previewImg" src={previewImg} alt="preview" />
      <div className="cardMeetup__content">
        <p className="title-gradient">{date}</p>
        <h3 className="subtitle">{title}</h3>
        <p className="text">{text}</p>
        <div className="cardMeetup__buttonsWrapper">
          {isOnlineEvent && (
            <div className="cardMeetup__events">
              <BadgeWithIcon
                icon={VideoIcon}
                text={`${isOnlineEvent} Event`}
                // position="left"
                // small
              />
            </div>
          )}
          {attendees && (
            <div
              className="cardMeetup__info"
              style={{ marginLeft: isOnlineEvent ? "15px" : "0px" }}
            >
              <Badge text={`${attendees} attendees`} />
            </div>
          )}
        </div>
      </div>
      <div className="cardMeetup__footer">
        {users.map(({ imgUrl, name, description }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="cardMeetup__footerCard">
            <img
              className="cardMeetup__footerCardAvatar"
              src={imgUrl}
              alt="avatar"
            />
            <h5 className="cardMeetup__footerCardName">{name}</h5>
            <p className="cardMeetup__footerCardDescr">{description}</p>
          </div>
        ))}
      </div>
      <div className="cardMeetup__footerMobile">
        {users.map(({ imgUrl, name, description }) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="cardMeetup__footerCardMobile">
            <img
              className="cardMeetup__footerCardAvatarMobile"
              src={imgUrl}
              alt="avatar"
            />
            <div className="footerCardNameWrapper">
              <h5 className="cardMeetup__footerCardName">{name}</h5>
              <p className="cardMeetup__footerCardDescr">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardMeetup;
