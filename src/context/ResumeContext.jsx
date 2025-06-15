import { createContext, useContext, useState } from "react";

// Create the context
const ResumeContext = createContext();

// Create the provider
export const ResumeProvider = ({ children }) => {
  const [analysisData, setAnalysisData] = useState(null);

  return (
    <ResumeContext.Provider value={{ analysisData, setAnalysisData }}>
      {children}
    </ResumeContext.Provider>
  );
};

// Custom hook to use the context
export const useResume = () => useContext(ResumeContext);
