import "./styles.scss";

type Props = {
  text: string;
  onClick: () => void;
};

function CustomButton({ text, onClick }: Props) {
  return (
    <button onClick={onClick} className="button" type="button">
      {text}
    </button>
  );
}

export default CustomButton;
