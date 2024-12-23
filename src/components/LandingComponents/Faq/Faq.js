import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Faq.module.css";

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
      question: "What is Affiliate Ritual and the story behind the name?",
      answer:
        "Affiliate Ritual is the first ever business model where anyone can join in actually free of cost and can earn in passive format. The only business model where you can join, learn from the experts, get product access as well as the affiliate software. Everything is free of cost! Since the beginning We always belive in the ritual of pure affiliate marketing. So, Affiliate Ritual has arrived!",
    },
    {
      question: "Should I join Affiliate Ritual?",
      answer:
        "Why not? Specially when you have the opportunity to earn without any investment through Affiliate Ritual.",
    },
    {
      question: "Tell me more about training mode.",
      answer:
        "We have designed our training mode specially for those people people, who want to learn from scratch.",
    },
    {
      question: "Will I get a certificate after completion?",
      answer:
        "Ofcourse you will get Affiliate Ritual verified Certificate. But for getting a job or a client, certificate doesn't matter. But your skill definetly.",
    },
    {
      question: "What if I can't learn? Then, will you guys throw me like others?",
      answer:
        "No, never. Because only for you people, we have invented this Super Affiliate Passive model business, where you can earn as a Club Leader through Affiliate Ritual.",
    },
    {
      question: "Any customer support number?",
      answer:
        "Yes. Note down please. It's +91 89816 69409 (Affiliate Ritual).",
    },
    {
      question: "How can I get in touch with a mentor?",
      answer:
        "You can request a mentor through our mentorship program page. After signing up, you will be matched with a mentor based on your learning goals and preferences. Mentors provide guidance, support, and career advice.",
    },
  ];

  return (
    <div className={styles.faq}>
      <div className={styles.faqParagraph}>
        Satisfying your curiosity with clear answers.
      </div>
      <div className={styles.faqContainer}>
        {data.map((item, i) => (
          <motion.div
            key={i}
            className={styles.faqItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className={`${styles.faqQuestion} ${selected === i ? styles.highlight : ""
                }`}
              onClick={() => toggle(i)}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              {item.question}
              <span
                className={`${styles.faqQuestionIcons} ${selected === i ? styles.highlight : ""
                  }`}
              >
                {selected === i ? "-" : "+"}
              </span>
            </motion.div>
            <motion.div
              className={`${styles.faqAnswer} ${selected === i ? styles.show : ""
                }`}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: selected === i ? "auto" : 0,
                opacity: selected === i ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {item.answer}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
