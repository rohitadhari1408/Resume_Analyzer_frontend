import { Navigate, Outlet, useLocation } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role; // Assuming your token has a "role" field

    if (!allowedRoles.includes(userRole)) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }

    return <Outlet />;
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem("token"); // Clear invalid token
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
