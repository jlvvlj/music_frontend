import { configureStore } from "@reduxjs/toolkit";
import { trackSlice } from "./reducers/tracks.reducer";
import userSlice from "./reducers/users.reducer";

const store = configureStore({
  reducer: {
    tracks: trackSlice.reducer,
    users: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
