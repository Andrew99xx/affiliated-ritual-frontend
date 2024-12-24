import React from 'react'
import styles from './Main.module.css';

import Home from '../../components/LandingComponents/Home/Home'
import IntroStats from '../../components/LandingComponents/IntroStats/IntroStats'
import HowItWorks from '../../components/LandingComponents/HowItWorks/HowItWorks'
import System from '../../components/LandingComponents/System/System'
import Package from '../../components/LandingComponents/Package/Package'
import WhyRitual from '../../components/LandingComponents/WhyRitual/WhyRitual'
import Trainer from '../../components/LandingComponents/Trainer/Trainer'
import Media from '../../components/LandingComponents/Media/Media'
import Club from '../../components/LandingComponents/Club/Club'
import Banner from '../../components/LandingComponents/Banner/Banner'
import Feedback from '../../components/LandingComponents/Feedback/Feedback'
import Proof from '../../components/LandingComponents/Proof/Proof'
import Faq from '../../components/LandingComponents/Faq/Faq'
import Leaderboard from '../../components/LandingComponents/Leaderboard/Leaderboard'


function Main({ openRegister }) {
    return (
        <main className={styles.main}>
            <div className={styles.heroSection}>
                {/* home section */}
                <section className={styles.homeSection} id="home">
                    <Home onOpenLaunch={openRegister} />
                </section>
                <IntroStats />
            </div>

            {/* how it works */}
            <section className={styles.howItWorkSection}>
                <h1 className={styles.heading}>Learn how it works?</h1>
                <HowItWorks />
            </section>

            {/* system forever */}
            <section className={styles.systemSection} id="system">
                <h1 className={styles.heading}>This Will Change The System Forever!</h1>
                <System />
            </section>

            {/* packages */}
            <section className={styles.packageSection} id="product">
                <h1 className={styles.heading}>Our Exclusive Packages</h1>
                <Package />
            </section>

            {/* why affiliate ritual */}
            <section className={styles.whyRitual} id="whyRitual">
                <h1 className={styles.heading}>Why Affiliate Ritual</h1>
                <WhyRitual />
            </section>

            {/* trainer section */}
            <section className={styles.trainerSection} id="trainer">
                <h1 className={styles.heading}>Our Trainer</h1>
                <Trainer />
            </section>

            {/* media section */}
            <section className={styles.mediaSection} id="media_section">
                <h1 className={styles.heading}>Media Presence</h1>
                <Media />
            </section>

            {/* club section */}
            <section className={styles.clubSection} id="club">
                <h1 className={styles.heading}>Our Leader & Members</h1>
                <Club />
            </section>

            {/* banner section */}
            <section className={styles.bannerSection} id="banner">
                <Banner openSignup={openRegister} />
            </section>

            {/* feedback section */}
            <section className={styles.feedbackSection} id="feedback">
                <h1 className={styles.heading}>Voice of Our Students</h1>
                <Feedback />
            </section>

            {/* proof section */}
            <section className={styles.proofSection} id="proof">
                <h1 className={styles.heading}>More Proof</h1>
                <Proof />
            </section>

            {/* frequently asked */}
            <section className={styles.faqSection} id="faq-section">
                <h1 className={styles.heading}>Frequently Asked Questions</h1>
                <Faq />
            </section>

            {/* leaderboard section */}
            <section className={styles.leaderboardSection} id="leaderboard">
                <h1 className={styles.heading}>Leaderboard</h1>
                <Leaderboard />
            </section>
        </main>
    )
}

export default Main