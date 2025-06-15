import React from 'react'
import AdminSidebar from '../componets/AdminSidebar';
import { useState } from 'react';
import AdminMainContent from '../componets/AdminMainContent'


const AdminPage = () => {
   const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("home");
  return (
    
        <div className="flex h-screen">
          <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
          <AdminMainContent activeTab={activeTab} />
    
  </div>
    
  )
}

export default AdminPage
