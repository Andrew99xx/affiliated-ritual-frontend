import React from 'react'
import styles from "./ArLogo.module.css"
import logo from "./logo.png"

function ArLogo() {
    return (
        <h3 className={styles.logo}>
            <img width={300} src={logo} />
        </h3>
    )
}

export default ArLogo