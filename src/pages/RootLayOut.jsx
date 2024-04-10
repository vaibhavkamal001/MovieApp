import { Outlet } from "react-router-dom";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import NavBar from "../components/NavBar/NavBar";

export default function RootLayOut() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col bg-slate-800">
        <main>
          <ScrollToTop />
          <Outlet />
        </main>
      </div>
    </>
  );
}
