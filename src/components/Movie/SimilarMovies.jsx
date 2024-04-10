import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { SimilarMovie } from "../../store/movie-action";
import { useParams } from "react-router-dom";
import { movieAction } from "../../store/movie-slice.";

export default function SimilarMovies() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    setPage(1);
    dispatch(movieAction.removeSimilarMovieList());
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(SimilarMovie(id, page));
  }, [id, dispatch, page]);

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

  const similarMovies = useSelector((state) => state.Movies.SimilarMovieList);
  return (
    <div className="bg-slate-800">
      <p className="text-slate-300 font-bold mx-10 ">SIMILAR MOVIES</p>
      <p className="border-b-4 border-slate-500 mx-10 w-[200px] text-center" />
      <div className="px-10 my-[25px] grid grid-cols-3 lg:grid-cols-4 justify-items-center">
        {similarMovies.map((movie, id) => (
          <MovieCard key={id} details={movie} />
        ))}
      </div>
    </div>
  );
}
