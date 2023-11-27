import InstagramIcon from "common/assets/images/contacts/instagram.svg";
import LinkedinIcon from "common/assets/images/contacts/linkedIN.svg";
import FacebookIcon from "common/assets/images/contacts/facebook.svg";
import GithubIcon from "common/assets/images/contacts/github.svg";
import TelegramIcon from "common/assets/images/contacts/telegram.svg";
import "./styles.scss";

type Props = {
  avatarImg: string;
  title: string;
  text: string;
};
function CardContacts({ avatarImg, title, text }: Props) {
  return (
    <div className="cardContacts">
      <img className="cardContacts__avatarImg" src={avatarImg} alt="avatar" />
      <h3 className="subtitle">{title}</h3>
      <p className="cardContacts__text">{text}</p>
      <div className="cardContacts__socialIconsWrapper">
        <img className="socialIcon" src={InstagramIcon} alt="instagram" />
        <img className="socialIcon" src={LinkedinIcon} alt="linkedin" />
        <img className="socialIcon" src={FacebookIcon} alt="facebook" />
        <img className="socialIcon" src={GithubIcon} alt="github" />
        <img className="socialIcon" src={TelegramIcon} alt="telegram" />
      </div>
    </div>
  );
}

export default CardContacts;
