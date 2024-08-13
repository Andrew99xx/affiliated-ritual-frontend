import React from "react";
import { Link } from "react-router-dom";
import "./HeaderRegisterOptions.css"

const HeaderRegisterOptions = ({ isRegisterOpen, closeRegister }) => {
    if (!isRegisterOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="landlogin">
                <button className="popup-close" onClick={closeRegister}>
                    &times;
                </button>
                <div className="popup-content">
                    <h2>Sign Up or Register</h2>
                    <div className="landlog">
                        <Link to="/student?action=register" className="st">
                            <img src="/student.png" alt="" height={80} width={80} /> Student
                        </Link>
                        <Link to="/teamleader?action=register" className="tml">
                            <img src="/leader.png" alt="" height={80} width={80} /> Team Leader
                        </Link>
                        <Link to="/trainer?action=register" className="tra">
                            <img src="/trainer.png" alt="" height={80} width={80} /> Trainer
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderRegisterOptions
