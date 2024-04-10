import React, { useEffect } from "react";
import ApplicationConstant from "../../applicationConstant/ApplicationConstant";
import { FaStar } from "react-icons/fa";
import SimilarMovies from "./SimilarMovies";
import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MovieDetail } from "../../store/movie-action";

export default function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MovieDetail(id));
  }, [id, dispatch]);

  const details = useSelector((state) => state.Movies.MovieDetails);

  const hh = Math.floor(details.runtime / 60);
  const mm = details.runtime % 60;
  const genres = details?.genres?.map((ele) => ele.name).join(" ");

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row item-center mx-10 mt-[100px]">
          <div className="p-5">
            <img
              className="w-[350px] md:w-[500px]"
              src={`${ApplicationConstant.imageUrl + details.poster_path}`}
              alt=""
            />
          </div>
          <div className="m-10">
            <div className="grid grid-cols-4 gap-2 items-center">
              <span className="col-span-3 text-xl md:text-5xl font-medium text-white md:mx-10">
                {details.title}
              </span>
              <div className="flex flex-row self-center items-center justify-end mx-10">
                <span className=" text-white p-1">
                  {Math.floor(details.vote_average) + "/10"}
                </span>
                <span className="p-1">
                  <FaStar className="text-yellow-400" />
                </span>
              </div>
              <div className="col-span-4 md:mx-12 text-slate-500">
                <span className="font-sm">
                  {details?.release_date?.substring(0, 4)}
                </span>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <span className="font-sm">{hh + "h " + mm + "min"}</span>
                &nbsp;&nbsp; | &nbsp;&nbsp;
                <span className="font-sm">
                  {details.adult ? 16 : 18}
                  {"+"}
                </span>
              </div>
            </div>
            <div className="py-2 md:p-4 md:mx-8">
              <span className="text-white font-medium">OVERVIEW</span>
              <hr className="p-1 text-bold text-slate-500" />
            </div>
            <div>
              <p className="text-white md:mx-12">{details.overview}</p>
              <div className="md:mx-12">
                <div className="flex flex-row text-slate-400 py-5">
                  <div className="flex flex-col">
                    <span>Genre</span>
                    <span>Language</span>
                    <span>Status</span>
                    <span>Tagline</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="pl-5">{genres}</span>
                    <span className="pl-5">{details.original_language}</span>
                    <span className="pl-5">{details.status}</span>
                    <span className="pl-5">{details.tagline}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="md:mx-12 p-2 text-red-500 rounded hover:text-white"
            >
              Watch Later
            </button>
          </div>
        </div>
        <SimilarMovies />
      </div>
    </>
  );
}
