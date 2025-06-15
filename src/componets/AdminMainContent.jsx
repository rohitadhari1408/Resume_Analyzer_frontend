import React from 'react'
import UserMangement from '../componets/UserMangement'
import ResumeManagement from './ResumeManagement'
import AiMonitoring from '../componets/AiMonitoring'
import SystemAnalaytics from '../componets/SystemAnalaytics'

const AdminMainContent = ({ activeTab }) => {
  return (
    
        <div className="flex-1 p-6 ml-16 md:ml-64 transition-all duration-300">
      {activeTab === "user-management" && <UserMangement />}
      {activeTab === "resume-management" && <ResumeManagement />}
      {activeTab === "ai-monitoring" && <AiMonitoring />}
      {activeTab === "system-analytics" && <SystemAnalaytics />}
    </div>
      
    
  )
}

export default AdminMainContent
