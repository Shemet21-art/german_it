import Popover from "common/components/Popover/Popover";
import "./styles.scss";

type Props = { text: string; count: number };

function CustomButtonWithPopover({ text, count }: Props) {
  return (
    <div className="buttonWrrapper">
      <button type="button" className="button">
        {text}
      </button>
      <Popover count={count} />
    </div>
  );
}

export default CustomButtonWithPopover;
