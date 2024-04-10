import React from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.Auth.isLogin);

  const onClickSearch = () => {
    navigate("../search");
  };

  return (
    <div className="flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-between bg-[#1e293bbd] py-2 lg:py-4">
      <div className="col-span-1 content-center md:p-2 mx-10">
        <Link to="../">
          <span className=" font-bold text-red-500 md:text-2xl">
            TTN-Movies
          </span>
        </Link>
      </div>
      <div className="col-span-1 flex justify-end mx-10">
        <button
          onClick={onClickSearch}
          className="w-10 md:p-2 text-slate-400 hover:text-white"
        >
          <BsSearch />
        </button>
        {isLogin && (
          <button className="text-slate-400 hover:text-white font-semibold p-2">
            Watch List
          </button>
        )}
        <Link
          to="../login"
          className="text-slate-400 hover:text-white font-semibold p-2"
        >
          {isLogin ? "LogOut" : "LogIn"}
        </Link>
      </div>
    </div>
  );
}
