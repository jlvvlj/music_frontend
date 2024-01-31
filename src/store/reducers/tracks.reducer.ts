import { createSlice } from "@reduxjs/toolkit";
import {
  getAllTrackTotalRevenue,
  getTrackTotalStreams,
} from "../actions/tracks.action";

export const trackSlice = createSlice({
  name: "tracks",
  initialState: {
    trackTotalStreams: [],
    allTrackTotalRevenue: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // getTrackTotalStream
    builder.addCase(getTrackTotalStreams.pending, (state: any) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      getTrackTotalStreams.fulfilled,
      (state: any, { payload }: any) => {
        state.trackTotalStreams = payload;
        state.isLoading = false;
        state.error = false;
      }
    );
    builder.addCase(
      getTrackTotalStreams.rejected,
      (state: any, { payload }: any) => {
        state.isLoading = false;
        state.error = true;
        if (payload) state.message = payload?.message;
      }
    );

    // getAllTrackTotalRevenue
    builder.addCase(getAllTrackTotalRevenue.pending, (state: any) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      getAllTrackTotalRevenue.fulfilled,
      (state: any, { payload }: any) => {
        state.allTrackTotalRevenue = payload;
        state.isLoading = false;
        state.error = false;
      }
    );
    builder.addCase(
      getAllTrackTotalRevenue.rejected,
      (state: any, { payload }: any) => {
        state.isLoading = false;
        state.error = true;
        if (payload) state.message = payload?.message;
      }
    );
  },
});

export const { setIsToast }: any = trackSlice.actions;
export default trackSlice;
