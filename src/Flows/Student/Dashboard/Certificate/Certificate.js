import React from 'react'
import styles from "./Certificate.module.css"
import cert from "../assets/cert.png"

const Certificate = () => {
  return (
    <div className={styles.certifcate}>
      <h1>Certificates</h1>
      <div className={styles.maincer}>
        <img src={cert} alt="" />
        <a href="" className={styles.btn}> download certificate</a></div>
    </div>
  )
}

export default Certificate