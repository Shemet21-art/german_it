import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import membersApi from "api/membersApi";
import { Member } from "models/member";

interface IInitialState {
  loading: boolean;
  error: null | string;
  members: Array<Member> | null;
}

const initialState: IInitialState = {
  loading: false,
  error: null,
  members: null,
};

const transformData = (data: any) => {
  const transormedData = Object.entries(data)
    .filter((dataItem) => {
      return dataItem[0] !== "lng";
    })
    .map((dataItem) => {
      return { name: dataItem[0], ...(dataItem[1] as any) };
    });

  return transormedData;
};

export const getMembers = createAsyncThunk(
  "memebers/fetchMembers",
  async () => {
    const response = await membersApi.getMembers();
    return transformData(response.data);
  },
);

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.members = null;
      })
      .addCase(
        getMembers.fulfilled,
        (state, action: PayloadAction<Array<Member>>) => {
          state.loading = false;
          state.error = null;
          state.members = action.payload;
        },
      );
  },
});

export const membersSelector = (state: RootState) => state.members;

export default membersSlice.reducer;
