import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import ContentPage from "./pages/ContentPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import AllCoursesPage from "./pages/AllCoursesPage.jsx";
import MyLearningPage from "./pages/MyLearningPage.jsx";
import FavoriteCoursePage from "./pages/FavoriteCoursePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import UpdateProfilePage from "./pages/UpdateProfilePage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/mainpage",
    element: <MainPage />,
  },
  {
    path: "/content",
    element: <ContentPage />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/contact",
    element: <ContactUsPage />,
  },
  {
    path: "/allcourses",
    element: <AllCoursesPage />,
  },
  {
    path: "/mylearning",
    element: <MyLearningPage />,
  },
  {
    path: "/favoritecourses",
    element: <FavoriteCoursePage />,
  },
  {
    path: "/userprofile",
    element: <UserProfilePage />,
  },
  {
    path: "/updateprofile",
    element: <UpdateProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
