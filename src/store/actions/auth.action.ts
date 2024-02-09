import axiosClient, { APISuccessResponse } from "@/utils/axiosClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const signUpAction = createAsyncThunk<
  APISuccessResponse,
  { firstName: string; lastName: string; email: string; password: string }
>("auth/register", async (arg, thinkAPI) => {
  try {
    const { data, status } = await axiosClient.post<APISuccessResponse, any>(
      "/auth/register",
      arg
    );
    if (status !== 201)
      return thinkAPI.rejectWithValue(
        new Error(data.message || "Something is wrong here")
      );
    return thinkAPI.fulfillWithValue(data);
  } catch (error: any) {
    if (error.response.data)
      return thinkAPI.rejectWithValue(
        new Error(error.response.data.error || "Something went wrong")
      );
    return thinkAPI.rejectWithValue(
      new Error(error.response || "Something is wrong here")
    );
  }
});

export const loginAction = createAsyncThunk<
  APISuccessResponse,
  { email: string; password: string }
>("auth/login", async (arg, thinkAPI) => {
  try {
    const { data, status } = await axiosClient.post<APISuccessResponse, any>(
      "/auth/login",
      arg
    );
    if (status !== 200) {
      return thinkAPI.rejectWithValue(
        new Error(data.message || "Something is wrong here")
      );
    }
    return thinkAPI.fulfillWithValue(data);
  } catch (error: any) {
    if (error.response.data)
      return thinkAPI.rejectWithValue(
        new Error(error.response.data.error || "Something went wrong")
      );
    return thinkAPI.rejectWithValue(
      new Error(error.response || "Something is wrong here")
    );
  }
});
