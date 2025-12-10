import { createSlice } from "@reduxjs/toolkit";
import { loginUser, fetchUserMe, refreshAccessToken } from "./authThunks";

const initialState = {
  user: null,
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // logout setup
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    },
  },

  extraReducers: (builder) => {
    // LOGIN — PENDING
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    // LOGIN — SUCCESS
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload;

      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    });

    // LOGIN — FAILED
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // GET USER DETAILS
    builder.addCase(fetchUserMe.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    // REFRESH TOKEN
    builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("accessToken", action.payload.accessToken);
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
