import React from "react";
import { useResume } from "../context/ResumeContext";

const Analysis = () => {
  const { analysisData } = useResume();

  // Corrected path
  const improvements = analysisData?.improvements || {};
  const sections = improvements.sections || {};
  const analysis = analysisData?.resume?.analysis || {};

  console.log("🔍 Full analysisData:", analysisData);
  console.log("📦 improvements:", improvements);
  console.log("📂 sections:", sections);

  const renderRow = (label, value) => (
    <tr key={label}>
      <td className="px-4 py-2 font-medium text-gray-800">{label}</td>
      <td className="px-4 py-2 text-gray-700">{value}</td>
    </tr>
  );

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">
        📊 Resume Analysis Report
      </h2>

      {!analysisData ? (
        <p className="text-gray-500 text-lg">⚠️ No analysis data found.</p>
      ) : (
        <>
          <p className="mb-4 text-green-600 font-medium">
            ✅ {analysisData.message}
          </p>

          <p className="mb-2 text-sm text-gray-500">
            File: <strong>{analysisData.resume?.filename}</strong>
          </p>

          <div className="overflow-x-auto shadow rounded-lg border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
              <thead className="bg-blue-100 text-blue-800 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Check</th>
                  <th className="px-4 py-3">Suggestion</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 text-black">
                {Object.entries(improvements)
                  .filter(([key]) => key !== "sections")
                  .map(([key, value]) => renderRow(key, value))}
                {Object.entries(sections).map(([sectionKey, sectionVal]) =>
                  renderRow(`Section - ${sectionKey}`, sectionVal)
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Analysis;
