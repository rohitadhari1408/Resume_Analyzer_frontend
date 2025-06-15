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
  
  export default NavItem;
  