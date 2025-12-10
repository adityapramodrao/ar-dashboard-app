import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "./authApi"; // axios instance

// 1️⃣ Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await apiClient.post("/auth/login", {
        username,
        password,
        expiresInMins: 30,
      });
      return res.data; // important: return only data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Login failed");
    }
  }
);

// 2️⃣ Fetch user details
export const fetchUserMe = createAsyncThunk(
  "auth/fetchUserMe",
  async (_, thunkAPI) => {
    try {
      const res = await apiClient.get("/auth/me"); 
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Fetch user failed");
    }
  }
);

// 3️⃣ Refresh access token
export const refreshAccessToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const refreshToken = state.auth.refreshToken;

      const res = await apiClient.post("/auth/refresh", {
        refreshToken,
        expiresInMins: 10,
      });

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Token refresh failed");
    }
  }
);
