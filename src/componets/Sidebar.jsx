
import { FaHome, FaUser, FaHistory, FaChartBar, FaBars } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";

const Sidebar = ({ isOpen, setIsOpen, activeTab, setActiveTab }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-white text-blue-600 p-4 shadow-lg flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-16 md:w-64'} md:overflow-visible`}>
      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-blue-600 p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-6">
        <AiOutlineRobot className="w-8 h-8 text-blue-600" />
        <span className={`${isOpen ? 'block' : 'hidden'} md:block text-lg font-bold`}>Resume AI</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        <NavItem icon={<FaHome />} text="Home" activeTab={activeTab} isOpen={isOpen} onClick={() => setActiveTab("home")} />
        <NavItem icon={<FaChartBar />} text="Analysis Report" activeTab={activeTab} isOpen={isOpen} onClick={() => setActiveTab("analysis")} />
        <NavItem icon={<FaHistory />} text="History" activeTab={activeTab} isOpen={isOpen} onClick={() => setActiveTab("history")} />
        <NavItem icon={<FaUser />} text="Profile" activeTab={activeTab} isOpen={isOpen} onClick={() => setActiveTab("profile")} />
      </nav>
    </div>
  );
};

const NavItem = ({ icon, text, isOpen, activeTab, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer text-blue-600 
        ${activeTab === text.toLowerCase() ? 'bg-blue-300' : 'hover:bg-blue-200'} 
        ${isOpen ? 'block' : 'hidden md:flex'}`}
    >
      {icon}
      <span className="md:block">{text}</span>
    </div>
  );
};

export default Sidebar;  
