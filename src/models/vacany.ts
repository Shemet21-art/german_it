interface Vacancy {
  id: number | string;
  date: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  expYears: number;
  city: string;
  group: string;
  salary: number;
  lng: string;
  vacancyIcon?: string;
  tasks?: Array<any>;
  employment?: string;
}

export default Vacancy;
