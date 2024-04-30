import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AboutUsPage,
  AllCoursesPage,
  ContactUsPage,
  ContentPage,
  FavoriteCoursePage,
  LoginPage,
  MainPage,
  MyLearningPage,
  RegisterPage,
  UpdateProfilePage,
  UserProfilePage,
} from "./pages/index";
import HtmlPPT from "./components/PPT/HtmlPPT";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
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
    {
      path: "/ppt",
      element: <HtmlPPT />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
