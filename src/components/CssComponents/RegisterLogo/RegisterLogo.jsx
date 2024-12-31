import React from 'react'
import register from './register.png'
import styles from "./RegisterLogo.module.css"

function RegisterLogo() {
    return (
        <img src={register} alt="Student Register" className={styles.RegisterImage} />
    )
}

export default RegisterLogo