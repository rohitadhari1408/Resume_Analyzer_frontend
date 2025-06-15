import { FaHome, FaChartBar, FaHistory, FaUser } from "react-icons/fa";
import withSidebar from "./withSidebar";

const UserDashboard = () => {
  return <h1 className="text-2xl font-bold">Welcome to User Dashboard</h1>;
};

// User Sidebar Items
const userNavItems = [
  { key: "home", icon: <FaHome />, text: "Home" },
  { key: "analysis", icon: <FaChartBar />, text: "Analysis Report" },
  { key: "history", icon: <FaHistory />, text: "History" },
  { key: "profile", icon: <FaUser />, text: "Profile" }
];

export default withSidebar(UserDashboard, userNavItems);
