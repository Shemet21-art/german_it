import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import vacanciesApi from "api/vacanciesApi";
import Vacancy from "models/vacany";
import { RootState } from "store";

interface IInitialState {
  loading: boolean;
  error: null | string;
  vacancy: Vacancy | null;
}

const initialState: IInitialState = {
  loading: false,
  error: null,
  vacancy: null,
};

export const getVacancyById = createAsyncThunk(
  "vacancy/fetchVacancyById",
  async (id: number | string, { rejectWithValue }) => {
    try {
      const response = await vacanciesApi.getVacancyById(id);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

const vacancySlice = createSlice({
  name: "vacancy",
  initialState,
  reducers: {
    resetVacansy: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getVacancyById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.vacancy = null;
      })
      .addCase(
        getVacancyById.fulfilled,
        (state, action: PayloadAction<Vacancy>) => {
          state.loading = false;
          state.vacancy = action.payload;
          state.error = null;
        },
      )
      .addCase(getVacancyById.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.vacancy = null;
        state.error = action.payload;
      });
  },
});

export const vacancySelector = (state: RootState) => state.vacancy;

export const { resetVacansy } = vacancySlice.actions;

export default vacancySlice.reducer;
