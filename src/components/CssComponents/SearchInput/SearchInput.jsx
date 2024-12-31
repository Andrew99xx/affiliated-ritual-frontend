import React from 'react'
import styles from "./SearchInput.module.css"

function SearchInput() {
    return (
        <div className={styles.searchbar}>
            <input className={styles.searchbarInput} type="text" placeholder="Search" />
        </div>
    )
}

export default SearchInput