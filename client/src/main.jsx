import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

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



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
