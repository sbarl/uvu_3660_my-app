import { useContext, React } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";


const AuthRoute = () => {
    const { isLoggedIn } = useContext(AuthContext)
    return isLoggedIn ? <Outlet /> : <Navigate to="/Login" />

}

export default AuthRoute;
//from lexture on feb 18th 39:51