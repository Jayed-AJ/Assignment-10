import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Auth from "../layouts/Auth";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BrowseTips from "../pages/BrowseTips";
import MyTips from "../pages/MyTips";
import ShareGardenTips from "../pages/ShareGardenTips";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/browseTips",
                element: <BrowseTips></BrowseTips>
            },
            {
                path: "/myTips",
                element: <MyTips></MyTips>
            },
            {
                path: "/shareGardenTips",
                element: <ShareGardenTips></ShareGardenTips>
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth></Auth>,
        children: [{
            path:"/auth/login",
            element: <Login></Login>
        },
        {
            path: "/auth/register",
            element: <Register></Register>
        }
    ]
    }
])