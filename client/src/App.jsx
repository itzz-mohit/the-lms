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
import AuthLayout from "./components/Authentication/AuthLayout";
import ProtectedLayout from "./components/Authentication/ProtectedLayout";
import { useDispatch } from "react-redux";
import { login } from "./features/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storeused = JSON.parse(localStorage.getItem("userData"));
    if (storeused) {
      dispatch(login({ userData: storeused }));
    }
  });
  const appRouter = createBrowserRouter([
    {
      path: "/login",
      element: (
        <AuthLayout authentication={false}>
          <LoginPage />
        </AuthLayout>
      ),
    },
    {
      path: "/register",
      element: (
        <AuthLayout authentication={false}>
          <RegisterPage />
        </AuthLayout>
      ),
    },
    {
      path: "/",
      element: <ProtectedLayout />,
      children: [
        {
          path: "",
          element: (
            <AuthLayout authentication>
              <MainPage />
            </AuthLayout>
          ),
        },
        {
          path: "content",
          element: (
            <AuthLayout authentication>
              <ContentPage />
            </AuthLayout>
          ),
        },
        {
          path: "about",
          element: (
            <AuthLayout authentication>
              <AboutUsPage />
            </AuthLayout>
          ),
        },
        {
          path: "contact",
          element: (
            <AuthLayout authentication>
              <ContactUsPage />
            </AuthLayout>
          ),
        },
        {
          path: "allcourses",
          element: (
            <AuthLayout authentication>
              <AllCoursesPage />
            </AuthLayout>
          ),
        },
        {
          path: "mylearning",
          element: (
            <AuthLayout authentication>
              <MyLearningPage />
            </AuthLayout>
          ),
        },
        {
          path: "favoritecourses",
          element: (
            <AuthLayout authentication>
              <FavoriteCoursePage />
            </AuthLayout>
          ),
        },
        {
          path: "userprofile",
          element: (
            <AuthLayout authentication>
              <UserProfilePage />
            </AuthLayout>
          ),
        },
        {
          path: "updateprofile",
          eelement: (
            <AuthLayout authentication>
              <UpdateProfilePage />
            </AuthLayout>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
