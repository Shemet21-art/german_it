type Props = {
  text: string;
  Icon: any;
};

function CommunititesCard({ text, Icon }: Props) {
  return (
    <div className="communitiesCard">
      <div className="communitiesCard__imgWrapper">
        <Icon />
      </div>
      <p className="communitiesCard__text">{text}</p>
    </div>
  );
}

export default CommunititesCard;
