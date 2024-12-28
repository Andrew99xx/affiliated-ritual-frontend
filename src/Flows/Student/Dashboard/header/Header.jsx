import React from 'react';
import styles from './Header.module.css';

import menu from "../assets/menu.png"
import coin from '../assets/coin.png';
import notif from '../assets/notif.png';
import profile from '../assets/profile.png';
import expand from '../assets/expand.png';

const Header = ({ totalCoins, toggleMenu }) => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                {/* <div className={styles.menugrid} onClick={toggleMenu}>
                    <img src={menu} alt="Menu" />
                </div> */}
                <div className={styles.searchbar}>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.icons}>
                    <div className={styles.coins}>
                        <img src={coin} height={25} alt="Coin" /> {totalCoins}
                    </div>
                    <div className={styles.maximise}>
                        <img src={expand} height={25} alt="Expand" />
                    </div>
                    <div className={styles.notifications}>
                        <img src={notif} height={30} alt="Notifications" />
                    </div>
                    <div className={styles.profile}>
                        <img src={profile} height={35} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
