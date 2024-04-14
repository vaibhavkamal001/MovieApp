import React from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthAction } from "../../store/auth-slice";

export default function NavBar() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("user");
  const dispatch = useDispatch();

  const onClickSearch = () => {
    navigate("../search");
  };

  const handleLogOut = () => {
    dispatch(AuthAction.isAuthenticateUser(false));
    localStorage.removeItem("user");
    navigate("..");
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
        {isLogin ? (
          <span
            onClick={handleLogOut}
            className="text-slate-400 hover:text-white font-semibold p-2 cursor-pointer"
          >
            LogOut
          </span>
        ) : (
          <Link
            to="../login"
            className="text-slate-400 hover:text-white font-semibold p-2"
          >
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
}
