import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import './Courses.css';

function Courses() {
    return (
        <div className="courses">
            <h1 className="heading">Explore Trending Courses</h1>

            <Swiper className="dialogs"
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }}
                slidesPerView={3}
                loop={true}
            >
                {["Lorem, ipsum.", "Course Name", "Lorem, ipsum.", "Lorem, ipsum.", "Lorem, ipsum."].map((title, index) => (
                    <SwiperSlide className="dialog" key={index}>
                        <motion.div
                            className="dialog-content"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="heading">{title}</div>
                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                sit provident, quas voluptatem minima explicabo ullam omnis
                                dolore aut ratione.
                            </p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Courses;