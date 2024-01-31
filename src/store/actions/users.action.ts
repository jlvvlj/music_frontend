import axiosClient from "@/utils/axiosClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserFriends = createAsyncThunk(
  "users/getUserFriends",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/user/getUserFriends");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const getUserContracts = createAsyncThunk(
  "users/getUserContracts",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/user/getUserContracts");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const getUserTracks = createAsyncThunk(
  "users/getUserTracks",
  async (_, thunkAPI) => {
    try {
      const response = await axiosClient.get("/user/getUserTracks");
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);
