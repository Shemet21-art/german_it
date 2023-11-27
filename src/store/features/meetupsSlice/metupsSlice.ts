import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Meetup from "models/meetup";
import { RootState } from "store";
import meetupsApi from "api/meetupsApi";

interface IInitialState {
  meetups: Array<Meetup>;
  loading: boolean;
  error: null | string;
}

const initialState: IInitialState = {
  meetups: [],
  loading: false,
  error: null,
};

export const getMeetups = createAsyncThunk("meetups/getMeetups", async () => {
  const response = await meetupsApi.getMeetups();
  return response.data;
});

const meetupsSlice = createSlice({
  name: "meetups",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMeetups.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.meetups = [];
      })
      .addCase(
        getMeetups.fulfilled,
        (state, action: PayloadAction<Array<Meetup>>) => {
          state.loading = false;
          state.error = null;
          state.meetups = action.payload;
        },
      )
      .addCase(getMeetups.rejected, (state) => {
        state.loading = false;
        state.meetups = [];
        state.error = "action.payload";
      });
  },
});

export const meetupsSelector = (state: RootState) => state.meetups;

export default meetupsSlice.reducer;
