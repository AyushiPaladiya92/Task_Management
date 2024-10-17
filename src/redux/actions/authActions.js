import axios from "axios"; // Make sure to install axios if you haven't already
import { createSlice } from "@reduxjs/toolkit";

// Action Types
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";

// Create a slice for auth
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action Creators
export const {
  loginRequest,
  loginSuccess,
  loginFail,
  logout,
} = authSlice.actions;

// Async Action to handle login
export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    
    // Replace with your API endpoint
    const response = await axios.post("/api/login", userData);

    dispatch(loginSuccess(response.data)); // Assuming response.data contains user info
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(loginFail(message));
  }
};

// Logout action
export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

// Selector
export const selectAuth = (state) => state.auth;

// Export the reducer
export default authSlice.reducer;
