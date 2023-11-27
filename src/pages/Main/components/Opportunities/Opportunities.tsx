import Card from "common/components/Cards/Card";
import ChatIcon from "common/assets/images/opportunities/chat.svg";
import BotIcon from "common/assets/images/opportunities/botIcon.svg";
import { useTranslation, TFunction } from "react-i18next";
import LocalChatIcon from "common/assets/images/opportunities/localChatIcon.svg";
import OffTopIcon from "common/assets/images/opportunities/offTopIcon.svg";
import DiscordIcon from "common/assets/images/opportunities/discordIcon.svg";
import LampIcon from "common/assets/images/opportunities/lampIcon.svg";
import Rectangle from "common/assets/images/opportunities/rectangle-opportunities.png";
import RectangleMobile from "common/assets/images/oportunities-rectangle-mobile.png";
import "./styles.scss";

type CardItem = {
  title: string;
  text: string;
  icon: string | any;
};

const cardList = (t: TFunction): Array<CardItem> => [
  {
    title: t("communities.opportunitiesTitleChat"),
    text: t("communities.opportunitiesTextChat"),
    icon: ChatIcon,
  },
  {
    title: t("communities.opportunitiesTitleMap"),
    text: t("communities.opportunitiesTextMap"),
    icon: BotIcon,
  },
  {
    title: t("communities.opportunitiesTitleLocal"),
    text: t("communities.opportunitiesTextLocal"),
    icon: LocalChatIcon,
  },

  {
    title: t("communities.opportunitiesTitleTelegram"),
    text: t("communities.opportunitiesTextTelegram"),
    icon: OffTopIcon,
  },
  {
    title: t("communities.opportunitiesTitleDiscord"),
    text: t("communities.opportunitiesTextDiscord"),
    icon: DiscordIcon,
  },
  {
    title: t("communities.opportunitiesTitleBisiness"),
    text: t("communities.opportunitiesTextBissiness"),
    icon: LampIcon,
  },
];

function Opportunities() {
  const [t] = useTranslation("common");
  return (
    <div className="opportunities">
      <img
        className="opportunities__rectangle"
        src={Rectangle}
        alt="reactangle"
      />

      <img
        className="opportunities__rectangleMobile"
        src={RectangleMobile}
        alt="reactangle"
      />
      <div className="container">
        <h1 className="title"> {t("communities.description")}</h1>
        <div className="opportunities__cardsWrapper">
          {cardList(t).map(({ title, text, icon }) => (
            <Card key={title} text={text} title={title} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Opportunities;
