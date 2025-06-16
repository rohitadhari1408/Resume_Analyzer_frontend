import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";


const baseUrl = import.meta.env.VITE_API_BASE_URL; // Ensure this is set in your .env
const API_URL = `${baseUrl}/resume`;

const History = () => {

  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedResumeUrl, setSelectedResumeUrl] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);

  useEffect(() => {
    const fetchResumeHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");

        const decodedToken = jwtDecode(token);
        const userId = decodedToken?.id || decodedToken?.userId;
        if (!userId) throw new Error("Invalid token");

        const response = await fetch(`${API_URL}/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });


        const contentType = response.headers.get("content-type");

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`❌ Fetch failed: ${errorText}`);
        }

        if (!contentType || !contentType.includes("application/json")) {
          const raw = await response.text();
          throw new Error(`❌ Expected JSON but got HTML: ${raw.substring(0, 100)}...`);
        }

        const data = await response.json();
        console.log("📌 Resume Data:", data);
        setResumes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResumeHistory();
  }, []);

  const getResumeUrl = (fileData, fileType) => {
    if (!fileData || !fileData.data) return null;

    try {
      const blob = new Blob([new Uint8Array(fileData.data)], { type: fileType });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("🚨 Blob creation failed:", error);
      return null;
    }
  };

  if (loading) return <div className="text-gray-700">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-lg font-semibold mb-2">Resume History</h2>

      {resumes.length === 0 ? (
        <p className="text-gray-500">No resumes found.</p>
      ) : (
        resumes.map(({ _id, filename, createdAt, analysis, fileData, fileType }) => {
          const fileUrl = getResumeUrl(fileData, fileType);

          return (
            <div key={_id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{filename}</p>
                  <p className="text-sm text-gray-500">{new Date(createdAt).toLocaleString()}</p>
                </div>

                {fileUrl ? (
                  <button
                    onClick={() => {
                      setSelectedResumeUrl(fileUrl);
                      setSelectedFileName(filename);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    View Resume
                  </button>
                ) : (
                  <p className="text-gray-500 italic text-sm">Resume file missing</p>
                )}
              </div>

              {analysis && (
                <div className="mt-2 text-gray-700">
                  {[
                    { label: "Grammar Score", value: analysis.grammar_score },
                    { label: "ATS Score", value: analysis.ats_score },
                    { label: "Spelling Mistakes", value: analysis.spelling_mistakes },
                    { label: "Passive Voice Usage", value: analysis.passive_voice_usage },
                    { label: "Readability Score", value: analysis.readability_score },
                    { label: "Word Count", value: analysis.word_count },
                  ].map(
                    ({ label, value }, index) =>
                      value !== undefined && (
                        <p key={index}>
                          <strong>{label}:</strong> {value}
                        </p>
                      )
                  )}

                  {Array.isArray(analysis.keywords_matched) && analysis.keywords_matched.length > 0 && (
                    <>
                      <p className="mt-2">
                        <strong>Keywords Matched:</strong>
                      </p>
                      <ul className="list-disc list-inside">
                        {analysis.keywords_matched.map((keyword, index) => (
                          <li key={index}>{keyword}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })
      )}

      {/* Resume Viewer Modal */}
      {selectedResumeUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-[90%] p-4 relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Viewing Resume: {selectedFileName}</h3>
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
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
