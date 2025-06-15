import React from 'react';

const ResumeContent = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-gray-900">
        How Strong is Your <span className="text-blue-600">Resume Content?</span>
      </h2>

      {/* Description */}
      <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
        Your resume is more than just a list of jobs—it's a powerful tool to showcase your skills and experience.
        Ensure that your content is **clear, impactful, and aligned with industry standards**.
      </p>

      {/* Cards Container */}
      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Content Analysis Card */}
        <div className="bg-blue-100 shadow-md rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-blue-900">📄 Content Analysis</h3>
          <p className="text-gray-700 mt-2">
            AI scans your resume to evaluate **clarity, readability, and impact**. Identify areas that need improvement.
          </p>
        </div>

        {/* Strength Highlighting Card */}
        <div className="bg-blue-100 shadow-md rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-blue-900">💡 Strength Highlighting</h3>
          <p className="text-gray-700 mt-2">
            Detects key **skills, accomplishments, and achievements** to make them stand out effectively.
          </p>
        </div>

        {/* Keyword Optimization Card */}
        <div className="bg-blue-100 shadow-md rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-blue-900">🔍 Keyword Optimization</h3>
          <p className="text-gray-700 mt-2">
            Ensures your resume contains **industry-relevant keywords** for better ATS compatibility.
          </p>
        </div>

        {/* Actionable Suggestions Card */}
        <div className="bg-blue-100 shadow-md rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-blue-900">📌 Actionable Suggestions</h3>
          <p className="text-gray-700 mt-2">
            Receive **personalized recommendations** to enhance your resume’s effectiveness.
          </p>
        </div>

        {/* Job Match Score Card */}
        <div className="bg-blue-100 shadow-md rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-blue-900">🎯 Job Match Score</h3>
          <p className="text-gray-700 mt-2">
            Analyzes how well your resume aligns with **target job descriptions**.
          </p>
        </div>

        {/* Readability & Structure Card */}
        <div className="bg-blue-100 shadow-md rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-blue-900">📊 Readability & Structure</h3>
          <p className="text-gray-700 mt-2">
            Evaluates **formatting, grammar, and sentence flow** for better clarity.
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default ResumeContent;
