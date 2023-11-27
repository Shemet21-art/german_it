import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import mapApi from "api/mapApi";
import IMapData from "models/mapData";
import { RootState } from "store";

interface IInitialState {
  mapData: IMapData | null;
}

const initialState: IInitialState = {
  mapData: null,
};

export const getMapData = createAsyncThunk("map/fetchMapData", async () => {
  const response = await mapApi.getMapData();
  return response.data;
});

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMapData.pending, (state) => {
        state.mapData = null;
      })
      .addCase(
        getMapData.fulfilled,
        (state, action: PayloadAction<IMapData>) => {
          state.mapData = action.payload;
        },
      );
  },
});

export const mapDataSelector = (state: RootState) => state.map.mapData;

export default mapSlice.reducer;
