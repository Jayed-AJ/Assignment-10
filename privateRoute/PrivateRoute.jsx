import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({children}) => {
    
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading) {
        return <Loading></Loading>
    }

    if(!user) {
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }

    return children
};

export default PrivateRoute;