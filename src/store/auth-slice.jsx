import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    isLogin: false,
    AuthorizationToken: "",
  },
  reducers: {
    isAuthenticateUser(state, action) {
      state.isLogin = action.payload;
    },
  },
});

export const AuthAction = AuthSlice.actions;

export default AuthSlice;
