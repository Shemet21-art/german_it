import "./styles.scss";

type Props = {
  id: string;
  text: string;
};

function VacanciesCustomButton({ id, text }: Props) {
  return (
    <button id={id} className="button" type="button">
      {text}
    </button>
  );
}

export default VacanciesCustomButton;
