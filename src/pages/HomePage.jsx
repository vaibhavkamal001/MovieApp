import Silder from "../components/Silder";
import MovieList from "../components/Movie/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { TreadingMovies } from "../store/movie-action";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(TreadingMovies());
  }, [dispatch]);
  const slides = useSelector((state) => state.Movies.TreadingMovie);
  return (
    <>
      <Silder slides={slides} />
      <MovieList />
    </>
  );
}
