import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HeaderRegisterOptions.css";

const HeaderRegisterOptions = ({ isRegisterOpen, closeRegister }) => {
    if (!isRegisterOpen) {
      return null;
    }

    return (
        <motion.div
            className="popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="landlogin"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                <button className="popup-close" onClick={closeRegister}>
                    &times;
                </button>
                <div className="popup-content">
                    <h2>Sign Up</h2>
                    <div className="landlog">
                        <Link to="/student?action=register" className="st">
                            <img src="/student.png" alt="Student" height={80} width={80} /> Student
                        </Link>
                        {/* <Link to="/teamleader?action=register" className="tml">
                            <img src="/leader.png" alt="Team Leader" height={80} width={80} /> Team Leader
                        </Link> */}
                        <Link to="/teammember?action=register" className="tml">
                            <img src="/member.png" alt="Team Member" height={80} width={80} /> Club Member
                        </Link>
                        <Link to="/trainer?action=register" className="tra">
                            <img src="/trainer.png" alt="Trainer" height={80} width={80} /> Trainer
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HeaderRegisterOptions;
