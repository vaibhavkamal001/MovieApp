import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  const search = useRef();
  return (
    <div className="flex-row fixed top-0 z-10 flex w-full items-center justify-between bg-[#1e293b] py-2 lg:py-4">
      <div className="content-center p-2 mx-10 w-full">
        <Link to="../">
          <span className=" font-semibold text-red-500 text-2xl">
            TTN-Movies
          </span>
        </Link>
      </div>
      <div className="w-full mx-10 flex">
        <form className="w-full mx-10 flex" action="">
          <input
            ref={search}
            className="relative placeholder:italic placeholder:text-slate-400 block bg-slate-100 w-full border border-slate-300 rounded-l-md py-2 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for movie..."
            type="text"
            name="search"
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              props.onClickSearch(search.current.value);
            }}
            className="flex items-center px-2 bg-slate-100 rounded-r-md relative"
          >
            <BsSearch className="text-slate-400" />
          </button>
        </form>
      </div>
    </div>
  );
}
