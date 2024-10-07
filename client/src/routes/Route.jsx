import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import About from "../pages/About";
import Contact from "../pages/Contact";
import JobDetails from "../pages/JobDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>,
               
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            
            {
                path: "/job/:id",
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },

            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },

        ]
    }
])

export default router;