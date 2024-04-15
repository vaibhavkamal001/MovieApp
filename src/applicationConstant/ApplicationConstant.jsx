const ApplicationConstant = {
  trendingMovieUrl:
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  imageUrl: "https://image.tmdb.org/t/p/original/",
  emailRxg: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  APIkey: process.env.REACT_APP_API_KEY,
};

export default ApplicationConstant;
