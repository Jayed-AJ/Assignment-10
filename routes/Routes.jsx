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
import Tipdetails from "../pages/Tipdetails";
import UpdateTip from "../pages/UpdateTip";
import ExploreGardeners from "../pages/ExploreGardeners";
import Gardener from "../pages/Gardener";
import Notfound from "../pages/Notfound";
// import LoadingRoute from "../pages/LoadingRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () =>
                    Promise.all([
                        fetch("https://p10-server.vercel.app/ActiveUsers").then(res => res.json()),
                        fetch("https://p10-server.vercel.app/tips").then(res => res.json())
                    ]).then(([users, tips]) => ({
                        users,
                        tips
                    }))
            },
            {
                path: "/browseTips",
                element: <BrowseTips></BrowseTips>,
                loader: () => fetch("https://p10-server.vercel.app/tips").then(res => res.json())

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
                path: "/exploreGardeners",
                element: <ExploreGardeners></ExploreGardeners>,
                loader: () => fetch("https://p10-server.vercel.app/users")
            },
            {
                path: "/welcome",
                element: <Welcome></Welcome>
            },
            {
                path: `/tipDetails/:id`,
                element: <PrivateRoute>
                    <Tipdetails></Tipdetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://p10-server.vercel.app/tips/${params.id}`),
            },
            {
                path: '/updateTip/:id',
                element: <UpdateTip></UpdateTip>,
                loader: ({ params }) => fetch(`https://p10-server.vercel.app/tips/${params.id}`)
            },
            {
                path: '/gardener/:email',
                element: <Gardener></Gardener>,
                loader: ({ params }) => fetch(`https://p10-server.vercel.app/user/${params.email}`)
            },
            {
                path: "*",
                element: <Notfound></Notfound>
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