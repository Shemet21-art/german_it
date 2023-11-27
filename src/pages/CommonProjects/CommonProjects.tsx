import PreviewImageProjects from "common/assets/images/commonprojects/previewprojects.png";
import { useTranslation, TFunction } from "react-i18next";
import UserAvatarImg from "common/assets/images/commonprojects/user-avatar.png";
import CardProject from "common/components/Cards/CardProject";
import Rectangle from "common/assets/images/rectangle-common-mobile.png";

import "./styles.scss";

const projects = (t: TFunction) => [
  {
    img: PreviewImageProjects,
    title: t("projects.titleFirst"),
    text: t("projects.textFirst"),
    owner: {
      name: t("projects.nameFirst"),
      descr: t("projects.descrFirst"),
      avatar: UserAvatarImg,
    },
  },
  {
    img: PreviewImageProjects,
    title: t("projects.titleSecond"),
    text: t("projects.textSecond"),
    owner: {
      name: t("projects.nameSecond"),
      descr: t("projects.descrSecond"),
      avatar: UserAvatarImg,
    },
  },
  {
    img: PreviewImageProjects,
    title: t("projects.titleThird"),
    text: t("projects.textThird"),
    owner: {
      name: t("projects.nameThird"),
      descr: t("projects.descrThird"),
      avatar: UserAvatarImg,
    },
  },
];

function CommonProjects() {
  const [t] = useTranslation("common");
  return (
    <div className="commonProjects">
      <img src={Rectangle} className="rectangle" alt="rectangle" />
      <div className="container">
        <h1 className="title">{t("commonProjects.title")}</h1>
        <div className="commonProjects__cardsWrapper">
          {projects(t).map(({ img, title, text, owner }) => (
            <CardProject
              key={title}
              previewImg={img}
              title={title}
              text={text}
              user={owner}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommonProjects;
