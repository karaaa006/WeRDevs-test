import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrency } from "../operations/currencyOperations";

export type TInitialState = {
  uah: 1;
  data: {
    usd: number | undefined;
    eur: number;
    pln: number;
  };
  isLoading: boolean;
  error: null | object | unknown;
};

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    uah: 1,
    data: {
      usd: 0,
      eur: 0,
      pln: 0,
    },
    isLoading: false,
    error: null,
  } as TInitialState,
  reducers: {
    setUah: (state, action) => {
      state.uah = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrency.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setUah } = currencySlice.actions;
