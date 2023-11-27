import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import vacanciesReducer from "./features/vacanciesSlice/vacanciesSlice";
import vacancyReducer from "./features/vacancySlice/vacancySlice";
import meetupsReducer from "./features/meetupsSlice/metupsSlice";
import meetupReducer from "./features/meetupSlice/meetupSlice";
import mapReducer from "./features/mapSlice/mapSlice";
import membersReducer from "./features/membersSlice/membersSlice";
import groupsReducer from "./features/groupsSlice/groupsSlice";

const store = configureStore({
  reducer: {
    vacancies: vacanciesReducer,
    vacancy: vacancyReducer,
    meetups: meetupsReducer,
    meetup: meetupReducer,
    map: mapReducer,
    members: membersReducer,
    groups: groupsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
