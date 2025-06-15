import React from 'react';

const FAQ = () => {
  return (
    <>
      {/* FAQ Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900">❓ Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mt-2">
          Find answers to common questions about ResumeAI.
        </p>

        {/* FAQ List */}
        <div className="mt-8 max-w-4xl mx-auto space-y-4">
          {[
            ["What is the AI-powered Resume Analyzer?", "An intelligent tool that scans, scores & suggests improvements for better job opportunities."],
            ["How does AI analyze my resume?", "It uses NLP & ML to evaluate formatting, skills, keywords & job compatibility."],
            ["What file formats are supported?", "PDF and DOCX formats are accepted."],
            ["Is my data secure?", "Yes! We prioritize privacy and do not share your data."],
            ["How long does the analysis take?", "Just a few seconds to provide instant feedback."],
            ["Can I download an optimized resume?", "Yes! We provide suggestions, and you can download an improved version."],
            ["Is this service free?", "We offer both free and premium plans."],
            ["Do you provide job recommendations?", "Yes! AI suggests job roles matching your skills."],
          ].map(([question, answer], index) => (
            <details key={index} className="bg-blue-100 p-4 rounded-lg shadow-md text-left">
              <summary className="font-semibold text-blue-900 cursor-pointer">{question}</summary>
              <p className="text-gray-700 mt-2">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
