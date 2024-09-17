import { lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";


const Mentors = lazy(() => import("../../pages/Mentors/Mentors.tsx"));
const Overview = lazy(() => import("../../pages/Overview/Overview.tsx"));
const Settings = lazy(() => import("../../pages/Settings/Settings.tsx"));
const Task = lazy(() => import("../../pages/Task/Task.tsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Outlet/></Layout>,
        children: [
            {path: "/", element: <Overview />},
            {path: "mentors", element: <Mentors />},
            {path: "settings", element: <Settings />},
            {path: "task", element: <Task />}
        ],
    }
]);


const Router = () => {
   return <RouterProvider router={router} />
}

export default Router;