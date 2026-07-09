import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loading from "./Loading";

const LoadingRoute = ({children}) => {
    const {loading} = useContext(AuthContext);
    console.log(loading);
    
    if(loading) {
        return<Loading></Loading>
    }

    return children
};

export default LoadingRoute;