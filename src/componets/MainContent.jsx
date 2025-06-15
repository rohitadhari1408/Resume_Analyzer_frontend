import React from "react";
import Home from '../componets/Home';
import Anyalysis from "../componets/Anyalysis";
import History from "../componets/History";
import Profile from "../componets/Profile";


const MainContent = ({ activeTab }) => {
    return (
      <div className="flex-1 p-6 ml-16 md:ml-64 transition-all duration-300">
        {activeTab === "home" && <Home />}
        {activeTab === "analysis" && <Anyalysis />}
        {activeTab === "history" && <History />}
        {activeTab === "profile" && <Profile />}
      </div>
    );
  };
  
  

  
  
  

  
  export default MainContent;
  