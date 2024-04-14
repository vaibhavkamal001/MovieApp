import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectiveRoutes = function ProtectiveRoutes(props) {
  const isLogIn = localStorage.getItem("user");
  if (!isLogIn) {
    return <Navigate to="/login" />;
  }
  return props.children;
};
