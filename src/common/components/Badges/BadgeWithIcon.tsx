import "./styles.scss";

type Props = {
  text: string;
  icon: string;
};

function BadgeWithIcon({ text, icon }: Props) {
  return (
    <div className="badgeWithIcon">
      <img src={icon} alt="badge icon" />
      {text}
    </div>
  );
}

export default BadgeWithIcon;
