import Rectangle from "common/assets/images/contacts/Rectangle.png";
import RectangleMobile from "common/assets/images/rectangle-mobile-contacts.png";

import AvatarImg from "common/assets/images/contacts/Avatar.png";
import CardContacts from "common/components/Cards/CardContacts";
import "./styles.scss";
import { useTranslation } from "react-i18next";

const contacts = [
  {
    avatarImg: AvatarImg,
    title: "Эдгар Линде",
    text: "основатель",
  },
  {
    avatarImg: AvatarImg,
    title: "Эдгар Линде",
    text: "основатель",
  },
  {
    avatarImg: AvatarImg,
    title: "Эдгар Линде",
    text: "основатель",
  },
  {
    avatarImg: AvatarImg,
    title: "Эдгар Линде",
    text: "основатель",
  },
];
function Contacts() {
  const [t] = useTranslation("common");
  return (
    <div className="contacts">
      <img className="rectangle" src={Rectangle} alt="rectangle" />
      <img
        className="rectangle-mobile"
        src={RectangleMobile}
        alt="rectangle mobile"
      />

      <div className="container">
        <h1 className="title"> {t("contacts.title")}</h1>
        <div className="contacts__cardsWrapper">
          {contacts.map(({ avatarImg, title, text }) => (
            <CardContacts
              key={title}
              avatarImg={avatarImg}
              title={title}
              text={text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
