import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import { Content } from "./components/index.js";
import ContentBanner from "./components/Banners/ContentBanner.jsx";
import ContentPage from "./pages/ContentPage.jsx";
import Quiz from "./components/Quiz/Quiz.jsx";
import FavoriteCourse from "./components/FavoriteCourse/FavoriteCourse.jsx";
import QuizBanner from "./components/Banners/QuizBanner.jsx";
import FeedbackForm from "./components/Forms/FeedbackForm.jsx";
import AboutUs from "./components/Banners/AboutUs.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactUs from "./components/Banners/ContactUs.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import AllCoursesPage from "./pages/AllCoursesPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
