import { createSlice } from "@reduxjs/toolkit";
import {
  createNewContract,
  getContractById,
} from "../actions/contracts.action";

export const contractSlice = createSlice({
  name: "contracts",
  initialState: {
    contractbyID: {},
    newContract: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get Contract By ID
    builder.addCase(getContractById.pending, (state: any) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      getContractById.fulfilled,
      (state: any, { payload }: any) => {
        state.contractbyID = payload;
        state.isLoading = false;
        state.error = false;
      }
    );
    builder.addCase(
      getContractById.rejected,
      (state: any, { payload }: any) => {
        state.isLoading = false;
        state.error = true;
        if (payload) state.message = payload?.message;
      }
    );

    // createContract
    builder.addCase(createNewContract.pending, (state: any) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      createNewContract.fulfilled,
      (state: any, { payload }: any) => {
        state.newContract = payload;
        state.isLoading = false;
        state.error = false;
      }
    );
    builder.addCase(
      createNewContract.rejected,
      (state: any, { payload }: any) => {
        state.isLoading = false;
        state.error = true;
        if (payload) state.message = payload?.message;
      }
    );
  },
});

export const { setIsToast }: any = contractSlice.actions;
export default contractSlice;
