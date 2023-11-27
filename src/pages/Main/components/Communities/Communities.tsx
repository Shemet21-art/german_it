import CommunititesCard from "pages/Main/components/Communities/CommunititesCard";
import { ReactComponent as ChartIcon } from "common/assets/icons/chart.svg";
import { ReactComponent as UsersIcon } from "common/assets/icons/user.svg";
import { ReactComponent as SettingIcon } from "common/assets/icons/setting.svg";
import { ReactComponent as WorkIcon } from "common/assets/icons/work.svg";
import { ReactComponent as ChatIcon } from "common/assets/icons/chat.svg";
import { useTranslation, TFunction } from "react-i18next";

import "./styles.scss";

type CardItem = {
  icon: any;
  text: string;
};

const cardList = (t: TFunction): Array<CardItem> => [
  {
    icon: ChartIcon,
    text: t("communities.development"),
  },
  {
    icon: UsersIcon,
    text: t("communities.searchExperience"),
  },
  {
    icon: SettingIcon,
    text: t("communities.technical"),
  },
  {
    icon: WorkIcon,
    text: t("communities.jointProjects"),
  },
  {
    icon: ChatIcon,
    text: t("communities.createProjects"),
  },
];

function Communities() {
  const [t] = useTranslation("common");
  return (
    <div className="container">
      <div className="communities ">
        <div className="communities__left">
          {cardList(t).map(({ text, icon }) => (
            <CommunititesCard key={icon} text={text} Icon={icon} />
          ))}
        </div>
        <div className="communities__right">
          <h1 className="title">{t("communities.title")}</h1>
          <h3 className="subtitle">{t("communities.subtitle")}</h3>
          <p className="text">{t("communities.text")}</p>
        </div>
      </div>
    </div>
  );
}

export default Communities;
