import React from 'react';

const KeyFeatures = () => {
  return (
    <>
      {/* Key Features Section */}
      <section className="py-16 px-6 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-extrabold text-blue-800">🚀 Key Features</h2>
          <p className="text-lg text-gray-600 mt-3">
            Unlock the full potential of your resume with AI-driven insights.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { title: "AI-Powered Resume Scoring", desc: "Get an AI-based resume score to measure your strengths." },
              { title: "Strengths & Weakness Analysis", desc: "Identify key strengths and areas for improvement." },
              { title: "Job Match Recommendations", desc: "Find jobs that best match your resume content." },
              { title: "Instant Feedback & Suggestions", desc: "Receive AI-driven insights to refine your resume." },
              { title: "Download Optimized Resume", desc: "Get a polished, ATS-friendly version of your resume." },
              { title: "Keyword Optimization", desc: "Ensure your resume is rich with relevant industry keywords." },
              { title: "Grammar & Readability Check", desc: "Improve clarity, conciseness, and overall readability." },
              { title: "Professional Formatting", desc: "Structure your resume for a clean, modern, and professional look." },
              { title: "Industry-Specific Customization", desc: "Tailor your resume for different industries and roles." },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-md text-left border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-semibold text-blue-800">✅ {feature.title}</h3>
                <p className="text-gray-700 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
