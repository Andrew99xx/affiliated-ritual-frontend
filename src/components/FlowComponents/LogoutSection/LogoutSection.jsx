// Logout.jsx
import React from "react";
import styles from "./Logout.module.css";

const LogoutSection = ({ handleLogout }) => {
    return (
        <section className={styles.sectionMain}>
            <div className={styles.closeBtn} onClick={closeModal}>
                <span>&times;</span>
            </div>
            <div className={styles.mainContainer}>
                <h1 className={styles.heading}>Are you sure you want to Logout?</h1>

                <div className={styles.buttonContainer}>
                    {/* <div onClick={closeModal} className={styles.button}>
                        Cancel
                    </div> */}

                    <div className={styles.button} onClick={handleLogout}>
                        Logout
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoutSection;
