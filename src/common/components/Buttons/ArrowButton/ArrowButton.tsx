import PrevArrowIcon from "common/assets/icons/prev-arrow.png";
import NextArrowIcon from "common/assets/icons/next-arrow.png";

import "./styles.scss";

type Props = {
  onClick: (event: any) => void;
  side: "prev" | "next";
};

function ArrowButton({ onClick, side }: Props) {
  const initIcon = (): string => {
    if (side === "prev") return PrevArrowIcon;
    if (side === "next") return NextArrowIcon;
    return "";
  };

  return (
    <button className="roundButton" onClick={onClick} type="button">
      <img src={initIcon()} alt="arrow icon" />
    </button>
  );
}

export default ArrowButton;
