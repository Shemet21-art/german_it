import "./styles.scss";

type Props = {
  text: string;
};

function Badge({ text }: Props) {
  return <div className="badge">{text}</div>;
}

export default Badge;
