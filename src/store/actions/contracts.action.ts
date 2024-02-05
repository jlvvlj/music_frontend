import axiosClient, { APISuccessResponse } from "@/utils/axiosClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContractById = createAsyncThunk<APISuccessResponse, string>(
  "contract/getContractById",
  async (id, thunkAPI) => {
    try {
      const response = await axiosClient.get(`/contract/getContractbyID/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const createNewContract = createAsyncThunk<APISuccessResponse, any>(
  "contract/createNewContract",
  async (contract, thunkAPI) => {
    try {
      const response = await axiosClient.post(
        `/contract/createContract`,
        contract
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Something went wrong");
    }
  }
);
