import React from "react";
import styles from "./Box.module.css";

const Box = ({ subhed, value, logo }) => {
  return (
    <div className={styles.box}>
      <div className={styles.boxInfo}>
        <div className={styles.detail}>
          <p>Total {subhed}</p>
          <h3>{value}</h3>
        </div>
        <div className={styles.boxIcon}>
          <img src={logo} alt="" />
        </div>
      </div>
      <div className={styles.status}>
        <div>
          <span className={styles.icon}>↑</span> <span>8.5%</span> up from yesterday
        </div>
      </div>
    </div>
  );
};

export default Box;
