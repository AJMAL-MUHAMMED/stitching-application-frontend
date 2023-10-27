import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function LoggedInRoutes() {
  const { admin } = useSelector((state) => ({ ...state }));
  return admin ? <Outlet /> : <Navigate to="/login" />;
}

export default LoggedInRoutes;
