import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      question: "What services does our education platform offer?",
      answer:
        "Our platform offers a variety of services including online courses, certification programs, mentorship opportunities, and career counseling.",
    },
    {
      question: "How can I earn while learning on this platform?",
      answer:
        "You can earn by participating in our affiliate program, tutoring other students, contributing to course content, and taking part in sponsored projects.",
    },
    {
      question: "What is the affiliate program and how does it work?",
      answer:
        "The affiliate program allows you to earn commissions by referring new students to our platform. You will receive a unique referral link to share, and you'll earn a percentage of the course fees for each successful enrollment through your link.",
    },
    {
      question: "Are there any prerequisites for joining the courses?",
      answer:
        "Most of our courses do not have prerequisites, making them accessible to learners of all levels. However, some advanced courses may require prior knowledge or completion of introductory courses.",
    },
    {
      question: "How do I access my courses and track my progress?",
      answer:
        "You can access your courses through your account dashboard. The dashboard provides an overview of your enrolled courses, progress tracking, and completion certificates.",
    },
    {
      question: "What types of certifications are available?",
      answer:
        "We offer various types of certifications including course completion certificates, professional certifications, and skill-based badges. These certifications can enhance your resume and professional profile.",
    },
    {
      question: "How can I get in touch with a mentor?",
      answer:
        "You can request a mentor through our mentorship program page. After signing up, you will be matched with a mentor based on your learning goals and preferences. Mentors provide guidance, support, and career advice.",
    },
  ];


  return (
    <div className="faq">
      <div className="faq-paragraph">Satisfying your curiosity with clear answers.</div>
      <div className="faq-container">
        {data.map((item, i) => (
          <div key={i} className="faq-item">
            <div
              className={`faq-question ${selected === i ? "highlight" : ""}`}
              onClick={() => toggle(i)}
            >
              {item.question}
              <span
                className={`faq-question-icons ${selected === i ? "highlight" : ""}`}
              >
                {selected === i ? "-" : "+"}
              </span>
            </div>
            <div className={`faq-answer ${selected === i ? "show" : ""}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Faq;
