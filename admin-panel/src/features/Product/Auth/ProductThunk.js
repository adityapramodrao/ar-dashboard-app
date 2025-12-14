// src/features/Product/Auth/ProductThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import api_client from "../../auth/authApi";

export const AllProducts = createAsyncThunk(
  "productAuth/AllProducts",
  async ({ page = 1, limit = 5 }, thunkApi) => {
    try {
      const skip = (page - 1) * limit;
      const response = await api_client.get(
        `/products?limit=${limit}&skip=${skip}`
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data || "Fetching Product Failed"
      );
    }
  }
);

export const productDetailsApi = createAsyncThunk(
  "productAuth/productDetailsApi",
  async ({ id }, thunkApi) => {
      try {
        const response = await api_client.get(`products/${id}`);
        return response.data;
      } catch (error) {
        return thunkApi.rejectWithValue(
          error.response?.data || "Fetching Product Failed"
        );
      }
  }
)
