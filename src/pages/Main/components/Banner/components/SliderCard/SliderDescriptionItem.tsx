import ArrowIcon from "common/assets/icons/arrow-purle.svg";

type Props = {
  Icon: any;
  descr: string;
  title: string;
};

function SliderDescriptionItem({ Icon, descr, title }: Props) {
  return (
    <div className="sliderCardItem">
      <div className="sliderCardItem__iconWrapper">
        <Icon />
      </div>
      <div className="sliderCardItem__content">
        <div className="sliderCardItem__contentTitle">
          <h5>{title}</h5>
          <img src={ArrowIcon} alt="arrow purple" />
        </div>
        <p>{descr}</p>
      </div>
    </div>
  );
}

export default SliderDescriptionItem;
