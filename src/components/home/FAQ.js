"use client"
import React, { useState } from 'react';
import { ChevronDown, BookOpen, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What is NSS (National Service Scheme)?",
    answer: "The National Service Scheme (NSS) is a Central Sector Scheme launched in 1969 by the Government of India, Ministry of Youth Affairs & Sports. It aims to develop the personality and character of student youth through voluntary community service. NSS provides opportunities to students to understand the community in which they work and develop social and civic responsibility."
  },
  {
    question: "What activities does NSS conduct?",
    answer: "NSS conducts a wide range of activities including blood donation camps, health awareness campaigns, tree plantation drives, cleanliness drives (Swachh Bharat), literacy programs, environmental conservation, disaster relief work, community development projects, and social awareness campaigns on issues like gender equality, drug abuse prevention, and road safety."
  },
  {
    question: "Why should I join NSS?",
    answer: "Joining NSS helps you develop leadership skills, social responsibility, and civic consciousness. It provides opportunities for personality development, helps you understand community issues, builds teamwork and communication skills, looks excellent on your resume, and gives you a chance to make a real difference in society. You'll also earn NSS certificates and potentially NSS awards for outstanding service."
  },
  {
    question: "How can I join NSS at GEC Patan?",
    answer: "To join NSS at GEC Patan, you need to be a registered student of the college. Watch for enrollment announcements at the beginning of each academic year, fill out the NSS enrollment form, attend the orientation session, and commit to completing the required service hours. Contact the NSS Program Officer or visit the NSS office for more details."
  },
  {
    question: "What is the time commitment required for NSS?",
    answer: "NSS volunteers are expected to contribute 120 hours of regular activities per year and participate in at least one special camp of 7-10 days duration. This typically includes weekly activities, weekend programs, and special events. The activities are scheduled to not interfere with academic commitments."
  },
  {
    question: "Do I get any certificate or recognition for NSS work?",
    answer: "Yes! Volunteers receive NSS certificates upon completion of required hours. Outstanding volunteers may receive awards and recognition at college, university, state, and national levels. The NSS 'B' and 'C' certificates are valuable additions to your academic credentials and are recognized by employers and higher education institutions."
  },
  {
    question: "Is there any fee to join NSS?",
    answer: "No, there is no fee to join NSS. It is completely free for all students. In fact, NSS may provide you with a uniform (NSS badge, T-shirt) and cover expenses for camps and special activities. The program is funded by the Government of India and the university."
  },
  {
    question: "Can NSS activities affect my academic performance?",
    answer: "NSS activities are designed to complement your academics, not hinder them. Activities are typically scheduled during weekends, holidays, or after college hours. Many students find that NSS actually improves their time management, leadership, and organizational skills, which positively impacts their overall performance."
  },
  {
    question: "What is an NSS Special Camp?",
    answer: "An NSS Special Camp is a residential program lasting 7-10 days where volunteers stay in a rural area or adopted village to undertake intensive community service. Activities include health camps, literacy programs, infrastructure development, cultural programs, and surveys. It's an immersive experience that helps you understand rural life and challenges."
  },
  {
    question: "What is the NSS motto and its significance?",
    answer: "The NSS motto is 'Not Me, But You' (Sanskrit: 'न मैं परंतु तुम'). This motto reflects the essence of democratic living and upholds the belief that individual welfare is ultimately dependent on the welfare of society. It emphasizes selfless service and putting others' needs before your own."
  },
  {
    question: "Can I include NSS experience in my resume?",
    answer: "Absolutely! NSS experience is highly valued by employers and educational institutions. It demonstrates leadership, social commitment, teamwork, and practical problem-solving skills. Include your NSS tenure, leadership positions held, major activities participated in, and any awards or recognition received. Many organizations specifically look for candidates with social service experience."
  },
  {
    question: "What skills will I develop through NSS?",
    answer: "NSS helps develop numerous valuable skills including leadership and team management, communication and interpersonal skills, project planning and execution, problem-solving and critical thinking, social awareness and empathy, adaptability and resilience, time management, and public speaking. These skills are essential for both personal growth and professional success."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
    <button
      onClick={onClick}
      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
    >
      <span className="text-lg font-semibold text-gray-900 pr-4">{question}</span>
      <ChevronDown 
        className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
    <div 
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="px-6 pb-5 pt-2">
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  </div>
);

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick }) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    hero: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl hover:scale-105',
  };
  
  const sizes = {
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-lg">Everything you need to know about NSS</p>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
              <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="primary" size="md">
              Contact NSS Office
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;