import { createSlice } from "@reduxjs/toolkit";
import {
  getUserContracts,
  getUserFriends,
  getUserTracks,
} from "../actions/users.action";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userFriends: [],
    userContracts: [],
    userTracks: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // getUserFriends
    builder.addCase(getUserFriends.pending, (state: any) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      getUserFriends.fulfilled,
      (state: any, { payload }: any) => {
        state.userFriends = payload;
        state.isLoading = false;
        state.error = false;
      }
    );
    builder.addCase(getUserFriends.rejected, (state: any, { payload }: any) => {
      state.isLoading = false;
      state.error = true;
      if (payload) state.message = payload?.message;
    });

    // getUserContracts
    builder.addCase(getUserContracts.pending, (state: any) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      getUserContracts.fulfilled,
      (state: any, { payload }: any) => {
        state.userContracts = payload;
        state.isLoading = false;
        state.error = false;
      }
    );
    builder.addCase(
      getUserContracts.rejected,
      (state: any, { payload }: any) => {
        state.isLoading = false;
        state.error = true;
        if (payload) state.message = payload?.message;
      }
    );

    // getUserTracks
    builder.addCase(getUserTracks.pending, (state: any) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(getUserTracks.fulfilled, (state: any, { payload }: any) => {
      state.userTracks = payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(getUserTracks.rejected, (state: any, { payload }: any) => {
      state.isLoading = false;
      state.error = true;
      if (payload) state.message = payload?.message;
    });
  },
});

export const { setIsToast }: any = userSlice.actions;
export default userSlice;
