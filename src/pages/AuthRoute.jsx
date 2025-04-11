import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../pages/AuthContext";

const AuthRoute = () => {
    const { isLoggedIn } = useContext(AuthContext);

    console.log("AuthRoute: isLoggedIn =", isLoggedIn);

    return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthRoute;