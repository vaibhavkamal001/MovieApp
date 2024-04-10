import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "Movies",
  initialState: {
    MovieList: [],
    SimilarMovieList: [],
    MovieDetails: {},
    SearchedMovie: [],
    TreadingMovie: [],
    WatchListMovie: [],
  },
  reducers: {
    appendMovieList(state, action) {
      state.MovieList = [...state.MovieList, ...action.payload.results];
    },
    removeMovieList(state, action) {
      state.MovieList = [];
    },
    appendSimilarMovieList(state, action) {
      state.SimilarMovieList = [
        ...state.SimilarMovieList,
        ...action.payload.results,
      ];
    },
    removeSimilarMovieList(state, action) {
      state.SimilarMovieList = [];
    },
    replaceMovieDetail(state, action) {
      state.MovieDetails = action.payload;
    },
    replaceSearchMovie(state, action) {
      state.SearchedMovie = action.payload.results;
    },
    replaceTreadingMovie(state, action) {
      state.TreadingMovie = action.payload.results;
    },
  },
});

export const movieAction = MovieSlice.actions;

export default MovieSlice;
