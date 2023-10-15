import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../../contexts/StateContextProvider";

const useAuth = () => {
  const { user } = useStateContext();
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  console.log(isAuth);
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
