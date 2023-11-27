import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import membersApi from "api/membersApi";
import { RootState } from "store";

interface IInitialState {
  loading: boolean;
  error: null | string;
  groups: Array<string>;
}

const initialState: IInitialState = {
  loading: false,
  error: null,
  groups: [],
};

const transformData = (data: any) => {
  const transformedData = Object.keys(data).filter(
    (dataItem) => dataItem !== "lng",
  );
  return transformedData;
};

export const getGroups = createAsyncThunk("groups/fetchGroups", async () => {
  const response = await membersApi.getMembers();
  return transformData(response.data);
});

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGroups.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.groups = [];
      })
      .addCase(
        getGroups.fulfilled,
        (state, action: PayloadAction<Array<string>>) => {
          state.loading = false;
          state.error = null;
          state.groups = action.payload;
        },
      );
  },
});

export const groupsSelector = (state: RootState) => state.groups;

export default groupsSlice.reducer;
