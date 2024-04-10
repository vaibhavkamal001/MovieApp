import React, { useEffect, useState } from "react";
import SearchBar from "../NavBar/SearchBar";
import MovieCard from "./MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { SearchMovieList } from "../../store/movie-action";

export default function SearchMovie() {
  const dispatch = useDispatch();

  const onClickSearch = (search) => {
    dispatch(SearchMovieList(search));
  };

  const data = useSelector((state) => state.Movies.SearchedMovie);
  return (
    <div className="bg-slate-800">
      <SearchBar onClickSearch={onClickSearch} />
      <div className="px-10 my-[100px]">
        <p className="text-white font-bold">
          {data.length > 0 ? "Searched Movie" : "No Data Found"}
        </p>
        <div className=" grid grid-cols-3 lg:grid-cols-4 justify-items-center">
          {data.length > 0 ? (
            data.map((movie, id) => <MovieCard key={id} details={movie} />)
          ) : (
            <div className="h-screen text-white"></div>
          )}
        </div>
      </div>
    </div>
  );
}
