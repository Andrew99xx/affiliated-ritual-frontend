import React from 'react'
import styles from "./Certificate.module.css"
import cert from "../assets/cert.png"
import ButtonComponent from '../../../../components/CssComponents/ButtonComponent/ButtonComponent'

const Certificate = () => {
  return (
    <div className={styles.certificate}>
      <h1 className={styles.certificateHeading}>Certificates</h1>
      <img src={cert} alt="certificate" className={styles.certificateImg} />
      <ButtonComponent className={""} onClick={() => { }} buttonText={"Download Certificate"} />
    </div>

  )
}

export default Certificate