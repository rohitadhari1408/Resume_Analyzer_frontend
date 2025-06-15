import React from 'react';

const HowItWorks = () => {
  return (
    <>
      {/* How It Works */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-blue-900">📂 How It Works?</h2>
        <p className="text-lg text-gray-600 mt-2">
          Follow these simple steps to optimize your resume with AI.
        </p>

        {/* Steps */}
        <div className="mt-8 max-w-4xl mx-auto space-y-6">
          {[
            "Upload Your Resume – Drag and drop your resume (PDF/DOCX).",
            "AI Analysis in Seconds – Our system scans and scores your resume.",
            "Get Personalized Feedback – See improvements & strengths.",
            "Apply for the Right Jobs – Get AI-suggested job roles.",
          ].map((step, index) => (
            <div key={index} className="flex items-center bg-blue-100 p-5 rounded-lg shadow-md">
              <span className="text-3xl font-bold text-blue-800 mr-4">{index + 1}️⃣</span>
              <p className="text-gray-700 text-lg">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
