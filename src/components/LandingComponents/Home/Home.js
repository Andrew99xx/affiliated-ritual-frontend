import React, { useEffect } from "react";
import styles from "./Home.module.css"; // Import the CSS module
import newBanner from "./newBanner.png";

function Home({ onOpenLaunch }) {


    useEffect(() => {
        // Add the 'revealed' class after a small delay to trigger the animation
        const highlightElements = document.querySelectorAll(
            `.${styles.homeHookHighlight}`
        );
        highlightElements.forEach((el) => {
            setTimeout(() => el.classList.add(styles.revealed), 500);
        });
    }, []);

    return (
        <div className={styles.home}>
            <div className={styles.homeTextWrapper}>
                <div className={styles.homeHeading}>Welcome to the future!</div>
                <div className={styles.homeHook}>
                    The only{" "}
                    <span className={styles.homeHookHighlight}>place</span> where you can
                    earn Real <span className={styles.homeHookHighlight}>Cash</span>.
                </div>
                <div className={styles.homeTag}>
                    Learn, Earn and Jackpot - Zero Investment!
                </div>
                <button className={styles.homeBtn} onClick={onOpenLaunch}>
                    LAUNCH
                </button>
            </div>

            <div className={styles.homeImgSvgWrapper}>
                <div className={styles.homeImgWrapper}>
                    <img
                        src={newBanner}
                        alt="home-img"
                        className={styles.homeImg}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
