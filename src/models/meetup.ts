interface ISpeaker {
  imgUrl: string;
  name: string;
  description: string;
}

interface IMeetup {
  id: number | string;
  date: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imgUrl: string;
  group: string;
  type: any;
  members: number;
  speakers: Array<ISpeaker>;
  lng: string;
  city: string;
}

export default IMeetup;
