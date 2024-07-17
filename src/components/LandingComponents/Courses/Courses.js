import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

function Courses() {
    return (
        <div className="courses">
            <h1 className="heading">Explore Trending courses</h1>

            <Swiper className="dialogs" slidesPerView={3} loop={true}>
                <SwiperSlide
                    className="dialog"
                    style={{ backgroundImage: "url('/bg.png')" }}
                >
                    <div className="heading">Lorem, ipsum.</div>
                    <p className="text">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                        sit provident, quas voluptatem minima explicabo ullam omnis
                        dolore aut ratione.
                    </p>
                </SwiperSlide>
                <SwiperSlide className="dialog">
                    <div className="heading">Course Name</div>
                    <p className="text">
                        {" "}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Possimus, itaque?
                    </p>
                </SwiperSlide>
                <SwiperSlide className="dialog">
                    <div className="heading">Lorem, ipsum.</div>
                    <p className="text">
                        {" "}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Possimus, itaque?
                    </p>
                </SwiperSlide>
                <SwiperSlide className="dialog">
                    <div className="heading">Lorem, ipsum.</div>
                    <p className="text">
                        {" "}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Possimus, itaque?
                    </p>
                </SwiperSlide>
                <SwiperSlide className="dialog">
                    <div className="heading">Lorem, ipsum.</div>
                    <p className="text">
                        {" "}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Possimus, itaque?
                    </p>
                </SwiperSlide>
                <SwiperSlide className="dialog">
                    <div className="heading">Lorem, ipsum.</div>
                    <p className="text">
                        {" "}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Possimus, itaque?
                    </p>
                </SwiperSlide>
                <SwiperSlide className="dialog">
                    <div className="heading">Lorem, ipsum.</div>
                    <p className="text">
                        {" "}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Possimus, itaque?
                    </p>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Courses