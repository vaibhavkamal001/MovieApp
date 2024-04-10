import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie-slice.";
import AuthSlice from "./auth-slice";

export default configureStore({
  reducer: { Movies: movieSlice.reducer, Auth: AuthSlice.reducer },
});
