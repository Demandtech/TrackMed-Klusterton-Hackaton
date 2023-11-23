import { createBrowserRouter } from "react-router-dom";
import {
  Login,
  SignUp,
  Home,
  ConfirmOtp,
  DashboardHome,
  DashboardMedical,
  DashboardProfile,
  DashboardProgress,
  About,
} from "./pages";
import { AuthLayout, DashboardLayout, GuestLayout } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "confirm/otp",
        element: <ConfirmOtp />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <DashboardHome />,
      },
      {
        path: "profile",
        element: <DashboardProfile />,
      },
      {
        path: "progress",
        element: <DashboardProgress />,
      },
      {
        path: "medical",
        element: <DashboardMedical />,
      },
    ],
  },
]);

export default router;
