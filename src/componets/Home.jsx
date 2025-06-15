import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useResume } from "../context/ResumeContext"; // ✅ Import context

const Home = () => {
  const [file, setFile] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [analysisData, setLocalAnalysisData] = useState(null);
  const navigate = useNavigate();
  const { setAnalysisData } = useResume(); // ✅ Get setter from context

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
    setAlertMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please upload a resume file before submitting.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to upload a resume.");
      return;
    }

    let userId;
    try {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.userId;
      if (!userId) throw new Error("User ID not found in token.");
    } catch (error) {
      console.error("Error decoding token:", error);
      alert("Invalid token. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch(`http://localhost:5000/resume/upload/${userId}`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      console.log("📡 Server Response Details:");
      console.log("Status Code:", response.status);
      console.log("Is Successful:", response.ok);
      console.log("Headers:", [...response.headers.entries()]);
      console.log("Response Body:", data);

      if (response.ok) {
        setAlertMessage("🎉 Resume uploaded successfully!");
        setLocalAnalysisData(data);
        setAnalysisData(data); // ✅ Store in context
      } else {
        setAlertMessage("❌ Failed to upload resume. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error uploading file:", error);
      setAlertMessage("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-100 p-8 flex flex-col items-center">
      <h2 className="text-blue-600 text-lg font-bold uppercase tracking-wider bg-blue-200 px-4 py-1 rounded-md">
        Resume Checker
      </h2>
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-4">
        Is your resume <span className="text-blue-600">good enough?</span>
      </h1>
      <p className="text-gray-600 mt-3 text-center max-w-lg">
        A free and fast AI resume checker doing <strong>16 crucial checks</strong> to ensure your resume is
        <strong> ready to perform</strong> and get you interview callbacks.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 mt-6 w-full max-w-lg text-center border border-blue-200"
      >
        <p className="text-gray-700">
          Drop your resume here or choose a file. <br />
          <span className="text-sm text-gray-500">PDF & DOCX only. Max 2MB.</span>
        </p>

        <label className="cursor-pointer mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          <FaCloudUploadAlt className="inline-block mr-2" /> Upload Your Resume
          <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileUpload} required />
        </label>

        {file && <p className="mt-2 text-sm text-green-600">{file.name} uploaded successfully!</p>}

        <button
          type="submit"
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
        >
          Analyze Resume
        </button>

        {alertMessage && <p className="mt-3 text-sm text-blue-600">{alertMessage}</p>}

        <p className="text-xs text-gray-400 mt-2">🔒 Privacy guaranteed</p>

        {analysisData && (
          <button
            type="button"
            onClick={() => navigate("/analysis", { state: { analysisData } })}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            View Analysis
          </button>
        )}
      </form>

      <div className="mt-8 max-w-lg text-center">
        <h3 className="text-2xl font-bold text-blue-600">✨ Key Features</h3>
        <ul className="mt-4 text-gray-700 space-y-2">
          <li>🚀 <strong>Instant Analysis</strong> – Get feedback in seconds!</li>
          <li>📊 <strong>16+ Key Resume Checks</strong> – ATS compatibility, formatting, keyword optimization, and more.</li>
          <li>🔍 <strong>AI-Powered Insights</strong> – Improve your chances of landing an interview.</li>
          <li>🛡️ <strong>Privacy First</strong> – We do not store or share your data.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
