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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
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
        element: <MyCollege></MyCollege>,
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
        element: <Profile></Profile>
      },
      {
        path: "/application/:id",
        element: <Application></Application>
      },
      {
        path: "/college-details/:id",
        element: <CollegeDetails></CollegeDetails>,
        loader: ({params}) => fetch('data.json')
      },
    ],
  },
]);

export default router;
