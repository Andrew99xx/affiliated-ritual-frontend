import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./HeaderRegisterOptions.module.css";

const HeaderRegisterOptions = ({ isRegisterOpen, closeRegister }) => {
    if (!isRegisterOpen) {
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
                className={styles.landlogin}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                <button className={styles.popupClose} onClick={closeRegister}>
                    &times;
                </button>
                <div className={styles.popupContent}>
                    <h2>Sign Up</h2>
                    <div className={styles.landlog}>
                        <Link to="/student?action=register" className={styles.st}>
                            <img
                                src="/student.png"
                                alt="Student"
                                height={80}
                                width={80}
                            />{" "}
                            Student
                        </Link>
                        <Link to="/teammember?action=register" className={styles.tml}>
                            <img
                                src="/member.png"
                                alt="Club Member"
                                height={80}
                                width={80}
                            />{" "}
                            Club Member
                        </Link>
                        <Link to="/trainer?action=register" className={styles.tra}>
                            <img
                                src="/trainer.png"
                                alt="Trainer"
                                height={80}
                                width={80}
                            />{" "}
                            Trainer
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HeaderRegisterOptions;
