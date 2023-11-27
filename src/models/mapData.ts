interface IMapData {
  features: Array<{
    type: string;
    id: number | string;
    geometry: {
      type: string;
      coordinates: Array<{
        0: number | null;
        1: number | null;
      }>;
    };
    properties: {
      about: string;
      city: string;
      name: string;
      state: string;
      username: string;
      group: string;
    };
  }>;
}

export default IMapData;
