import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-blue-900 py-10 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center space-x-6 text-lg font-medium">
            <a href="#" className="hover:text-blue-300 transition">About</a>
            <a href="#" className="hover:text-blue-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-300 transition">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="hover:text-blue-300 transition">
              <FaLinkedin size={28} />
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <FaTwitter size={28} />
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <FaGithub size={28} />
            </a>
          </div>

          {/* Dummy Content */}
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-sm">
            ResumeAI is an AI-powered tool that helps job seekers craft the perfect resume. Get real-time feedback, 
            optimize for ATS systems, and increase your chances of landing your dream job.
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Stay ahead in the hiring process with smart resume recommendations, keyword optimization, and instant AI analysis.
          </p>

          {/* Copyright */}
          <p className="text-gray-400 mt-6 text-sm">© 2025 ResumeAI. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
