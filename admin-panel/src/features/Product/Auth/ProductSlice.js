// src/features/Product/Auth/productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { AllProducts } from "./ProductThunk";

const initialState = {
  productD: [],
  total: 0,
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: "productAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(AllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productD = action.payload.products; // ✅ FIX
        state.total = action.payload.total;
      })
      .addCase(AllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default productSlice.reducer;
