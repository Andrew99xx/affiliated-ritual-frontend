import React from 'react'
import styles from './logout.module.css' // Import the CSS module
import close from './close.png'
import log from './log.png'
import ButtonComponent from '../CssComponents/ButtonComponent/ButtonComponent'

const Logout = ({ showModal, closeModal, handleLogout }) => {
  return (
    <div
      className={showModal ? `${styles.modal} ${styles.displayBlock}` : `${styles.modal} ${styles.displayNone}`}
    >
      <section className={styles.modalMain}>
        <div
          className={styles.closebtn}
          onClick={closeModal}>
          <img src={close} alt="" />
        </div>
        <div className={styles.mainc}>
          <img src={log} alt="switch" />
          <h1 className={styles.heading}>Are you sure you want to Logout?</h1>
          <div className={styles.btnc}>
            <ButtonComponent
              onClick={closeModal}
              className={styles.btn}
              buttonText={"Cancel"}
            />
            <ButtonComponent
              onClick={handleLogout}
              className={styles.btn}
              buttonText={"Logout"}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Logout
