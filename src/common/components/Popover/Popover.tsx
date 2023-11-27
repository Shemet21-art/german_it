import ProfileIcon from "common/assets/icons/profile.png";
import { useTranslation } from "react-i18next";
import "./styles.scss";

type Props = {
  count: number;
};

function Popover({ count }: Props) {
  const { t } = useTranslation("common");
  return (
    <div className="popover">
      <div className="popover__header">
        <h5 className="popover__popoverCount">{count}</h5>
        <img className="popover__icon" src={ProfileIcon} alt="Profile icon" />
      </div>
      <p className="popover__description">{t("popover.description")}</p>
    </div>
  );
}

export default Popover;
