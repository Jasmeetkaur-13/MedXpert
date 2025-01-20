import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "How does your AI-powered health assistant work?",
      answer: "Our AI health assistant uses natural language processing to understand your symptoms and provide personalized medical advice. It offers symptom checking, health tracking, and suggestions for lifestyle changes to improve your well-being."
    },
    {
      question: "Can I trust the medical recommendations from your platform?",
      answer: "Yes, our AI tools are built with the expertise of healthcare professionals and trained on vast medical datasets. They provide evidence-based recommendations that are always verified by certified specialists for your peace of mind."
    },
    {
      question: "How accurate is the AI-driven diagnosis?",
      answer: "Our AI diagnostic tools have been extensively trained on large medical datasets and validated by healthcare professionals. They achieve high accuracy rates but are always used in conjunction with human medical expertise."
    },
    {
      question: "What types of medical imaging can the AI analyze?",
      answer: "Our AI can analyze various types of medical imaging including X-rays, MRIs, CT scans, and ultrasounds. The system is continuously updated with the latest medical imaging technologies."
    },
    {
      question: "How do I schedule a consultation with a specialist?",
      answer: "You can schedule consultations through our platform by selecting your preferred specialist and available time slot. Our AI system helps match you with the most appropriate healthcare provider."
    }
  ];
  

  return (
    <div id="faq" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Find answers to common questions about our AI healthcare platform
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;