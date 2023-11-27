import { CardUser } from "common/components/Cards/props";
import "./styles.scss";

type Props = {
  title: string;
  previewImg: string;
  text: string;
  user: CardUser;
};

function CardProject({
  title,
  previewImg,
  text,
  user: { name, avatar, descr },
}: Props) {
  return (
    <div className="cardProject">
      <img className="cardProject__previeImg" src={previewImg} alt="preview" />
      <div className="cardProject__content">
        <h3 className="subtitle">{title}</h3>
        <p className="text">{text}</p>
      </div>
      <div className="cardProject__footer">
        <img src={avatar} alt="user avatar" />
        <div className="cardProject__userInfo">
          <h4>{name}</h4>
          <p>{descr}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
