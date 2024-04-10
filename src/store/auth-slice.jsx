import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    isLogin: false,
    AuthorizationToken: "",
  },
  reducers: {},
});

export const AuthAction = AuthSlice.actions;

export default AuthSlice;
