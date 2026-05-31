import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import logo from "../src/assets/logo.png"

const Navbar = () => {
    const {user,signOutUser} = useContext(AuthContext);
    console.log(user);

    const links = <>
       <NavLink to = "/" className={({ isActive, isPending }) =>
      `font-bold mx-3 ${isPending ? "text-green-600" : isActive ? "text-green-500 underline" : "text-green-700"}`}>Home
      </NavLink>
       <NavLink to = "/browseTips" className={({ isActive, isPending }) =>
      `font-bold mx-3 ${isPending ? "text-green-600" : isActive ? "text-green-500 underline" : "text-green-700"}`}>BrowseTips
      </NavLink>
       <NavLink to = "/shareGardenTips" className={({ isActive, isPending }) =>
      `font-bold mx-3 ${isPending ? "text-green-600" : isActive ? "text-green-500 underline" : "text-green-700"}`}>ShareTips
      </NavLink>
       <NavLink to = "/myTips" className={({ isActive, isPending }) =>
      `font-bold mx-3 ${isPending ? "text-green-600" : isActive ? "text-green-500 underline" : "text-green-700"}`}>MyTips
      </NavLink>
    </>

    const handelLogOut = () => {
        signOutUser()
        .then(()=> {
            console.log("signout"),
            alert("SIgnOut successful!")
        })
        .catch(error => console(error))
    }

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img className="h-8 w-10" src={logo} alt="logo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <button onClick={handelLogOut} className="btn btn-sm bg-green-700 font-bold italic text-green-200">LogOut</button>:
                        <button className="btn btn-sm bg-green-700 font-bold italic text-green-200"><Link to="/auth/login">Login</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;