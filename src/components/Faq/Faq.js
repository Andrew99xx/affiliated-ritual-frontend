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
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nobis.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nobis.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nobis.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nobis.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nobis.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nobis.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nobis.",
    },
  ];

  return (
    <div className="faq">
      <div className="faq-container">
        {data.map((item, i) => (
          <div key={i} className="faq-item">
            <div className="faq-question" onClick={() => toggle(i)}>
              {item.question}
              <span>{selected === i ? "-" : "+"}</span>
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
