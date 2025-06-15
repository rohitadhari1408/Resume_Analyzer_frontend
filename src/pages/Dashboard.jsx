import { useState } from "react";
import Sidebar from '../componets/Sidebar'; // ✅ Check if Sidebar exists
import MainContent from '../componets/MainContent';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; 
import { useEffect } from "react";
// ✅ Check if MainContent exists

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);  // ✅ Ensure this is defined

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found, redirecting to login...");
      navigate("/login");
      return;
    }

    try {
      // ✅ Decode token to get the role
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;  // Ensure your token contains 'role' field

      console.log("Decoded Role:", role);
      setUserRole(role);
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("token");  // Clear invalid token
      navigate("/login");  // Redirect to login
    }
  }, [navigate]);

  // ✅ Ensure Dashboard does not break if `userRole` is null
  if (!userRole) {
    return <div>Loading...</div>;  // Show a loading state while role is being set
  }

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent activeTab={activeTab} />
    </div>
  );
};

export default Dashboard;
