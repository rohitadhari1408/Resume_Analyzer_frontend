import React from 'react';
import Image from '../assets/resume.jpeg';

const Hero1 = () => {
  return (
    <section className=" mt-10 text-blue-700 bg-white py-16 px-6 flex flex-col md:flex-row items-center justify-center">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src={Image} 
          alt="AI Resume Analysis" 
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-4xl font-bold">
          Optimize Your Resume with AI Precision
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          ResumeAI analyzes your resume beyond grammar, helping you improve formatting, readability, and keyword relevance. Get instant feedback and make your resume recruiter-friendly!
        </p>
        <p className="text-lg text-gray-600 mt-2">
          Our AI ensures your resume passes through <strong>ATS (Applicant Tracking Systems)</strong> used by top companies.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg text-white">
          Try Resume Optimization Now ➜
        </button>
      </div>
    </section>
  );
};

export default Hero1;
