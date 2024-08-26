import React from "react";
import { Link } from "react-router-dom";
import "./HeaderLoginOptions.css"

const HeaderLoginOptions = ({ isLoginOpen, closeLogin }) => {
  if (!isLoginOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="landregister">
        <button className="popup-close" onClick={closeLogin}>
          &times;
        </button>
        <div className="popup-content">
          <h2>Log in</h2>
          <div className="landlog">
            <Link to="/student?action=login" className="st">
              <img src="/student.png" alt="" height={80} width={80} /> Student
            </Link>
            <Link className="tml" to="/teamleader?action=login">
              <img src="/leader.png" alt="" height={80} width={80} /> Team Leader
            </Link>
            
            <Link to="/trainer?action=login" className="tra">
              <img src="/trainer.png" alt="" height={80} width={80} /> Trainer
            </Link>
            <Link to="/teammember?action=register" className="tml">
              <img src="/member.png" alt="" height={80} width={80} /> Team Member
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLoginOptions;
