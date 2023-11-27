import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import vacanciesApi from "api/vacanciesApi";
import Vacancy from "models/vacany";

interface IInitialState {
  loading: boolean;
  error: null | string;
  vacancies: Vacancy[];
}

const initialState: IInitialState = {
  vacancies: [],
  loading: false,
  error: null,
};

export const getVacancies = createAsyncThunk(
  "vacancies/fetchVacancies",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (_: undefined, { rejectWithValue }) => {
    try {
      const response = await vacanciesApi.getVacancies();
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    resetVacancies: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getVacancies.pending, (state) => {
        state.loading = true;
        state.vacancies = [];
        state.error = null;
      })
      .addCase(
        getVacancies.fulfilled,
        (state, action: PayloadAction<Vacancy[]>) => {
          state.loading = false;
          state.vacancies = action.payload;
          state.error = null;
        },
      )
      .addCase(getVacancies.rejected, (state, action: PayloadAction<any>) => {
        console.log(action.payload, "ERROr");
        state.loading = false;
        state.vacancies = [];
        state.error = action.payload;
      });
  },
});

export const vacanciesSelector = (state: RootState) => state.vacancies;

export const { resetVacancies } = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
