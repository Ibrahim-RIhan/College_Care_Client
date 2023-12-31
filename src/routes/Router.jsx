import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Colleges from "../pages/Colleges";
import Admission from "../pages/Admission";
import MyCollege from "../pages/MyCollege";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Application from "../pages/Application";
import CollegeDetails from "../pages/CollegeDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/my-college",
        element: (
          <PrivateRoute>
            <MyCollege></MyCollege>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/application/:id",
        element: <PrivateRoute><Application></Application></PrivateRoute>,
      },
      {
        path: "/college-details/:id",
        element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://college-care-server.vercel.app/colleges/${params.id}`),
      },
    ],
  },
]);

export default router;
