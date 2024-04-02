import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import { Content } from "./components/index.js";
import ContentBanner from "./components/Banners/ContentBanner.jsx";
import ContentPage from "./pages/ContentPage.jsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
