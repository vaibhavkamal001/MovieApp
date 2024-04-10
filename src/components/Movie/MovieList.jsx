import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/movie-action";
import MovieSlice, { movieAction } from "../../store/movie-slice.";

export default function MovieList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setPage(1);
    dispatch(movieAction.removeMovieList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  const handleInfiniteScroll = async () => {
    try {
      setTimeout(2000);
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const movies = useSelector((state) => state.Movies.MovieList);
  return (
    <div className="mx-2 my-[120px] relative grid grid-cols-3 lg:grid-cols-4 justify-items-center">
      {movies.map((movie, id) => (
        <MovieCard key={id} details={movie} />
      ))}
    </div>
  );
}
