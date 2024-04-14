import React from "react";
import { Navigate } from "react-router-dom";

export default function CheckLogInRoute(props) {
  const isLogIn = localStorage.getItem("user");
  if (!isLogIn) {
    return props.children;
  }
  return <Navigate to=".." />;
}
