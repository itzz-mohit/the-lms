import { Outlet } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const ProtectedLayout = () => (
  <AuthLayout authentication>
    <Outlet />
  </AuthLayout>
);

export default ProtectedLayout;
