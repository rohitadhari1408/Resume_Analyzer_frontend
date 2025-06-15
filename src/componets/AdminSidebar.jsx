import { FaUser, FaFileAlt, FaChartBar, FaExclamationTriangle, FaBars, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AdminSidebar = ({ isOpen, setIsOpen, activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Destroy the token
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className={`fixed top-0 left-0 h-full bg-white text-blue-600 p-4 shadow-lg flex flex-col justify-between transition-all duration-300 ${isOpen ? 'w-64' : 'w-16 md:w-64'} md:overflow-visible`}>
      
      {/* Sidebar Top Section */}
      <div>
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden fixed top-4 left-4 z-50 text-blue-600 p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="w-6 h-6" />
        </button>

        {/* Logo Section */}
        <div className="flex items-center gap-2 mb-6">
          <AiOutlineRobot className="w-8 h-8 text-blue-600" />
          <span className={`${isOpen ? 'block' : 'hidden'} md:block text-lg font-bold`}>Admin Panel</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4">
          <NavItem icon={<FaUser />} text="User Management" activeTab={activeTab} isOpen={isOpen} onClick={() => setActiveTab("user-management")} />
          <NavItem icon={<FaFileAlt />} text="Resume Management" activeTab={activeTab} isOpen={isOpen} onClick={() => setActiveTab("resume-management")} />
          <NavItem icon={<FaExclamationTriangle />} text="AI Monitoring" activeTab={activeTab} isOpen={isOpen} onClick={() => setActiveTab("ai-monitoring")} />
          <NavItem icon={<FaChartBar />} text="System Analytics" activeTab={activeTab} isOpen={isOpen} onClick={() => setActiveTab("system-analytics")} />
        </nav>
      </div>

      {/* Logout Button at Bottom */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-4 p-2 rounded-lg cursor-pointer text-red-600 hover:bg-red-200 w-full"
      >
        <FaSignOutAlt className="w-5 h-5" />
        <span className={`${isOpen ? 'block' : 'hidden'} md:block`}>Logout</span>
      </button>
    </div>
  );
};

const NavItem = ({ icon, text, isOpen, activeTab, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer text-blue-600 
        ${activeTab === text.toLowerCase().replace(/ /g, '-') ? 'bg-blue-300' : 'hover:bg-blue-200'} 
        ${isOpen ? 'block' : 'hidden md:flex'}`}
    >
      {icon}
      <span className="md:block">{text}</span>
    </div>
  );
};

export default AdminSidebar;
