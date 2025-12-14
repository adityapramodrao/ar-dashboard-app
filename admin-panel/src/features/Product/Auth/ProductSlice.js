// src/features/Product/Auth/productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { AllProducts, productDetailsApi } from "./ProductThunk";

const initialState = {
  productD: [],
  productDetail: null,
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

    builder
      .addCase(productDetailsApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(productDetailsApi.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetail = action.payload; // ✅ FIX
      })
      .addCase(productDetailsApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    
  }
});

export default productSlice.reducer;
