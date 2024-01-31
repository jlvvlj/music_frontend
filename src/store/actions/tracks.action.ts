import axiosClient from "@/utils/axiosClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTrackTotalStreams = createAsyncThunk(
  "tracks/getTrackTotalStreams",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/track/getTrackTotalStreams");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const getAllTrackTotalRevenue = createAsyncThunk(
  "tracks/getAllTrackTotalRevenue",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get(
        "/track/getAllTrackTotalRevenueHandle"
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);
