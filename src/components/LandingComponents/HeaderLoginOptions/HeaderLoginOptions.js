import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./HeaderLoginOptions.module.css";

const HeaderLoginOptions = ({ isLoginOpen, closeLogin }) => {
  if (!isLoginOpen) {
    return null;
  }

  return (
    <motion.div
      className={styles.popupOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={styles.landregister}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <button className={styles.popupClose} onClick={closeLogin}>
          &times;
        </button>
        <div className={styles.popupContent}>
          <h2>Log in</h2>
          <div className={styles.landlog}>
            <Link to="/student?action=login" className={styles.st}>
              <motion.img
                src="/student.png"
                alt=""
                height={80}
                width={80}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              />{" "}
              Student
            </Link>
            <Link className={styles.tml} to="/teamleader?action=login">
              <motion.img
                src="/leader.png"
                alt=""
                height={80}
                width={80}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              />{" "}
              Club Leader
            </Link>
            <Link to="/trainer?action=login" className={styles.tra}>
              <motion.img
                src="/trainer.png"
                alt=""
                height={80}
                width={80}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              />{" "}
              Trainer
            </Link>
            <Link to="/teammember?action=login" className={styles.tml}>
              <motion.img
                src="/member.png"
                alt=""
                height={80}
                width={80}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              />{" "}
              Club Member
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeaderLoginOptions;
