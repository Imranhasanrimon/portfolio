import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProjectDetails from "../layouts/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
    },
    {
        path: "/:projectName",
        element: <ProjectDetails></ProjectDetails>,
    },
]);