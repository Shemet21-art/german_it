import "./styles.scss";

type Props = {
  text: string;
  icon: string;
  position: "left" | "right";
  small?: boolean;
};

function CustomButtonWithIcon({ text, icon, small, position = "left" }: Props) {
  const renderContent = () => {
    if (position === "left") {
      return (
        <>
          <img src={icon} alt="button icon" />
          {text}
        </>
      );
    }
    return (
      <>
        {text}
        <img src={icon} alt="button icon" />
      </>
    );
  };

  return (
    <button
      type="button"
      className={`button button__withIcon ${small && "small"}`}
    >
      {renderContent()}
    </button>
  );
}

CustomButtonWithIcon.defaultProps = {
  small: false,
};

export default CustomButtonWithIcon;
