import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ResumeManagement = () => {
  const [resumes, setResumes] = useState([]);
  const [selectedResumeUrl, setSelectedResumeUrl] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      const response = await axios.get(`${baseUrl}/admin/resumes`);
      console.log("Fetched resumes:", response.data);
      setResumes(response.data);
    } catch (error) {
      console.error("Error fetching resumes:", error);
    }
  };

  const getBlobUrl = (base64, fileType) => {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      byteArrays.push(new Uint8Array(byteNumbers));
    }

    const blob = new Blob(byteArrays, { type: fileType || "application/pdf" });
    return URL.createObjectURL(blob);
  };

  const handleViewResume = (resume) => {
    const url = getBlobUrl(resume.fileData, resume.fileType);
    setSelectedResumeUrl(url);
    setSelectedFileName(resume.filename);
  };

  const handleDownloadResume = (resume) => {
    const url = getBlobUrl(resume.fileData, resume.fileType);
    const link = document.createElement("a");
    link.href = url;
    link.download = resume.filename || "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/admin/resume/${id}`);
      setResumes(resumes.filter((resume) => resume.resumeId !== id));
    } catch (err) {
      console.error("❌ Failed to delete resume:", err);
      if (err.response) {
        console.error("🔍 Delete Error Response:", err.response.data);
      }
      alert("Failed to delete resume. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Resume Management</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">User</th>
              <th className="border px-4 py-2">Filename</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Grammar</th>
              <th className="border px-4 py-2">ATS</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {resumes.map((resume) => (
              <tr key={resume._id} className="text-center">
                <td className="border px-4 py-2">{resume.userName}</td>
                <td className="border px-4 py-2">{resume.filename}</td>
                <td className="border px-4 py-2">
                  {new Date(resume.createdAt).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  {resume.analysis?.grammar_score ?? "N/A"}%
                </td>
                <td className="border px-4 py-2">
                  {resume.analysis?.ats_score ?? "N/A"}%
                </td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleViewResume(resume)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDownloadResume(resume)}
                    className="px-3 py-1 bg-green-500 text-white rounded-md"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => handleDelete(resume.resumeId)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Resume Modal */}
      {selectedResumeUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-[90%] p-4 relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Viewing: {selectedFileName}</h3>
              <button
                onClick={() => {
                  setSelectedResumeUrl(null);
                  setSelectedFileName(null);
                }}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
            <iframe
              src={selectedResumeUrl}
              className="w-full h-full border rounded"
              title="Resume Viewer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeManagement;
