import "./styles.scss";

type Props = {
  title: string;
  text: string;
  icon: string | any;
};

function Card({ title, text, icon }: Props) {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__iconWrapper">
          <img className="card__img" src={icon} alt="card icon" />
        </div>
      </div>
      <div className="card__content">
        <h2 className="subtitle">{title}</h2>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
