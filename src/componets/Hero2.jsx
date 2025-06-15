import React from 'react';

const Hero2 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight">
            AI-Powered Resume Analyzer
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-200 mt-4">
            Optimize your resume with cutting-edge AI technology. Get instant feedback on formatting, keywords, and overall impact—helping you land your dream job faster.
          </p>

          {/* Key Features List */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg font-medium">
            <div className="flex items-center gap-2">
              ✅ <span>ATS Optimization – Ensure your resume passes recruiter filters.</span>
            </div>
            <div className="flex items-center gap-2">
              ✅ <span>Instant Feedback – Get real-time AI-driven insights.</span>
            </div>
            <div className="flex items-center gap-2">
              ✅ <span>AI-Powered Suggestions – Improve clarity & impact.</span>
            </div>
            <div className="flex items-center gap-2">
              ✅ <span>Grammar & Readability Checks – Make your resume flawless.</span>
            </div>
            <div className="flex items-center gap-2">
              ✅ <span>Job-Specific Keywords – Boost relevance & ranking.</span>
            </div>
            <div className="flex items-center gap-2">
              ✅ <span>Professional Formatting – Ensure a polished, ATS-friendly look.</span>
            </div>
          </div>

          

          {/* CTA Button */}
          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition duration-300 hover:bg-gray-200">
            Upload Resume Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero2;
