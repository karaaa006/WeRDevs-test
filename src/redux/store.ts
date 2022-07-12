import { configureStore } from "@reduxjs/toolkit";
import { currencySlice } from "./slices/currencySlice";

export const store = configureStore({
  reducer: currencySlice.reducer,
});
