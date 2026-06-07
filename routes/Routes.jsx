import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Auth from "../layouts/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BrowseTips from "../pages/BrowseTips";
import MyTips from "../pages/MyTips";
import ShareGardenTips from "../pages/ShareGardenTips";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Welcome from "../pages/Welcome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () =>
                    Promise.all([
                        fetch("http://localhost:3000/users").then(res => res.json()),
                        fetch("http://localhost:3000/tips").then(res => res.json())
                    ]).then(([users, tips]) => ({
                        users,
                        tips
                    }))
            },
            {
                path: "/browseTips",
                element: <BrowseTips></BrowseTips>
            },
            {
                path: "/myTips",
                element: <PrivateRoute>
                    <MyTips></MyTips>
                </PrivateRoute>
            },
            {
                path: "/shareGardenTips",
                element: <PrivateRoute>
                    <ShareGardenTips></ShareGardenTips>
                </PrivateRoute>
            },
            {
                path: "/welcome",
                element: <Welcome></Welcome>
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth></Auth>,
        children: [{
            path: "/auth/login",
            element: <Login></Login>
        },
        {
            path: "/auth/register",
            element: <Register></Register>
        }
        ]
    }
])