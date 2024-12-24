import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import styles from './Trainer.module.css'; // Import the CSS Module
import trainerImage from "./trainer.jpg";

function Trainer() {
    const trainerData = [
        {
            imgLink: trainerImage,
            alt: "Jacob - UI/UX expert",
            name: "Jacob",
            position: "UI/UX Expert"
        },
        {
            imgLink: trainerImage,
            alt: "Jacob - UI/UX expert",
            name: "Jacob",
            position: "UI/UX Expert"
        },
        {
            imgLink: trainerImage,
            alt: "Jacob - UI/UX expert",
            name: "Jacob",
            position: "UI/UX Expert"
        },
        {
            imgLink: trainerImage,
            alt: "Jacob - UI/UX expert",
            name: "Jacob",
            position: "UI/UX Expert"
        }
    ];

    return (
        <div className={styles.container}>
            <p className={styles.paragraph}>
                Let's meet with the team of our industry expert trainers. We believe that you will be able to change your life with the most advanced AI integrated training module cooked by Affiliate Ritual.
            </p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className={styles.sliderContainer}
            >
                {trainerData.map((item, i) => (
                    <SwiperSlide key={i} className={styles.item}>
                        <img
                            className={styles.img}
                            src={item.imgLink}
                            alt={item.alt}
                        />
                        <div className={styles.txtPos}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.position}>{item.position}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Trainer;
