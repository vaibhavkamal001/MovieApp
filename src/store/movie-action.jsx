import { movieAction } from "./movie-slice.";

export const fetchMovies = (page) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDM1NzZlODFhYjM0ODJhNzQwMDQ1NjJmNjE2YTYyNSIsInN1YiI6IjYxNTkwMmEwZGQ3MzFiMDA4Yjk0MDk3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z-HpP_FJpeNiM7Hk6o9hKyqdtp9oZrhq6y4m7ZXr-8Q",
      },
    };

    const fetchData = async () => {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      return data;
    };

    try {
      const movieList = await fetchData();
      dispatch(movieAction.appendMovieList(movieList));
    } catch (error) {
      console.log(error);
    }
  };
};

export const SimilarMovie = (movieId, page) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDM1NzZlODFhYjM0ODJhNzQwMDQ1NjJmNjE2YTYyNSIsInN1YiI6IjYxNTkwMmEwZGQ3MzFiMDA4Yjk0MDk3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z-HpP_FJpeNiM7Hk6o9hKyqdtp9oZrhq6y4m7ZXr-8Q",
      },
    };
    const fetchData = async () => {
      const response = await fetch(url, options);
      if (!response.ok) {
        new Error("Could'nt fetch the similar movie data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const similarMovieList = await fetchData();

      dispatch(movieAction.appendSimilarMovieList(similarMovieList));
    } catch (error) {
      console.log(error);
    }
  };
};

export const MovieDetail = (movieId) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDM1NzZlODFhYjM0ODJhNzQwMDQ1NjJmNjE2YTYyNSIsInN1YiI6IjYxNTkwMmEwZGQ3MzFiMDA4Yjk0MDk3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z-HpP_FJpeNiM7Hk6o9hKyqdtp9oZrhq6y4m7ZXr-8Q",
      },
    };
    const fetchData = async () => {
      const response = await fetch(url, options);
      if (!response.ok) {
        new Error("Counld'nt fetch the Movie details");
      }
      const data = await response.json();
      return data;
    };
    try {
      const movieDetail = await fetchData();
      dispatch(movieAction.replaceMovieDetail(movieDetail));
    } catch (error) {
      console.log(error);
    }
  };
};

export const SearchMovieList = (search) => {
  return async (dispatch) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDM1NzZlODFhYjM0ODJhNzQwMDQ1NjJmNjE2YTYyNSIsInN1YiI6IjYxNTkwMmEwZGQ3MzFiMDA4Yjk0MDk3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z-HpP_FJpeNiM7Hk6o9hKyqdtp9oZrhq6y4m7ZXr-8Q",
      },
    };

    const fetchData = async () => {
      const response = await fetch(url, options);
      if (!response.ok) {
        new Error("Could'nt fetch the Search Movie");
      }
      const data = await response.json();
      return data;
    };

    try {
      const searchData = await fetchData();
      dispatch(movieAction.replaceSearchMovie(searchData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const TreadingMovies = () => {
  return async (dispatch) => {
    const url =
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDM1NzZlODFhYjM0ODJhNzQwMDQ1NjJmNjE2YTYyNSIsInN1YiI6IjYxNTkwMmEwZGQ3MzFiMDA4Yjk0MDk3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z-HpP_FJpeNiM7Hk6o9hKyqdtp9oZrhq6y4m7ZXr-8Q",
      },
    };
    const fetchData = async () => {
      const response = await fetch(url, options);
      if (!response.ok) {
        new Error("Cloud'nt fetch the Treanding Data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const treadingMovie = await fetchData();
      dispatch(movieAction.replaceTreadingMovie(treadingMovie));
    } catch (error) {
      console.log(error);
    }
  };
};
