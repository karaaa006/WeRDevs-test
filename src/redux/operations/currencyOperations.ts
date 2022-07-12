import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchCurrency = createAsyncThunk(
  "fetchCurrency/currencyOperations",
  async (_, { rejectWithValue }) => {
    try {
      const { result: usd } = await api.getCurrency({ from: "uah", to: "usd" });
      const { result: eur } = await api.getCurrency({ from: "uah", to: "eur" });
      const { result: pln } = await api.getCurrency({ from: "uah", to: "pln" });

      return { usd, eur, pln };
    } catch (err) {
      console.error(err);
      return rejectWithValue(err);
    }
  }
);
