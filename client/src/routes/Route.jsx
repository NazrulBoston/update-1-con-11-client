import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import About from "../pages/About";
import Contact from "../pages/Contact";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdatedJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import AllJobs from "../pages/AllJobs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
            },

            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/my-bids",
                element: <MyBids></MyBids>,
            },
            {
                path: "/bid-requests",
                element: <BidRequests></BidRequests>,
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact></Contact></PrivateRoute>,
            },
            {
                path:'/add-job',
                element:<AddJob></AddJob>
            },
            {
                path:'/my-posted-jobs',
                element:<MyPostedJobs></MyPostedJobs>
            },
            {
                path:'/jobs',
                element:<AllJobs></AllJobs>
            }

        ]
    }
])

export default router;