import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import meetupsApi from "api/meetupsApi";
import IMeetup from "models/meetup";

interface IInitialState {
  loading: boolean;
  error: null | string;
  meetup: IMeetup | null;
}

const initialState: IInitialState = {
  loading: false,
  error: null,
  meetup: null,
};

export const getMeetupId = createAsyncThunk(
  "meetup/fetchMeetupById",
  async (id: number | string) => {
    const reponse = await meetupsApi.getMeetupById(id);
    return reponse.data;
  },
);

const meetupSlice = createSlice({
  name: "meetup",
  initialState,
  reducers: {
    resetMeetup: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getMeetupId.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.meetup = null;
      })
      .addCase(
        getMeetupId.fulfilled,
        (state, action: PayloadAction<IMeetup>) => {
          state.loading = false;
          state.meetup = action.payload;
          state.error = null;
        },
      );
  },
});

export const meetupSelector = (state: RootState) => state.meetup;

export const { resetMeetup } = meetupSlice.actions;

export default meetupSlice.reducer;
