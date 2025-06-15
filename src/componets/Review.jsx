import React from 'react';
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <>
      {/* Reviews Section */}
      <section className="bg-blue-900 py-16 px-6 text-white text-center">
        <h2 className="text-4xl font-extrabold">🌟 What Our Users Say</h2>
        <p className="text-lg text-gray-200 mt-2">
          Hear from professionals who improved their resumes with ResumeAI!
        </p>

        {/* Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Superb Resume Optimization!",
              content: "This AI-powered resume scanner helped me improve my resume in minutes. I landed more interviews!",
              author: "Rohan Sharma • 2 days ago",
            },
            {
              title: "Easy and Efficient",
              content: "The analysis was quick, and the suggestions were spot on. Highly recommend it!",
              author: "Priya Mehta • 1 day ago",
            },
            {
              title: "Game-Changer for Job Seekers",
              content: "ResumeAI boosted my resume score significantly. A must-try for serious job seekers!",
              author: "Amit Kapoor • 3 hours ago",
            },
          ].map((review, index) => (
            <div key={index} className="bg-white text-blue-900 p-6 rounded-lg shadow-lg">
              {/* Star Ratings */}
              <div className="flex justify-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={20} />
                ))}
              </div>

              {/* Review Title */}
              <h3 className="font-semibold text-xl mt-3">{review.title}</h3>

              {/* Review Content */}
              <p className="text-gray-700 mt-3">{review.content}</p>

              {/* Author */}
              <p className="text-gray-500 text-sm mt-3">{review.author}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
