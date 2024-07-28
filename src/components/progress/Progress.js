import React from "react";
import "./progress.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Progress = () => {
  return (
    <div className="progress">
      <div className="prheader">
        <h3 className="heading">course 1</h3>
        <h3 className="heading">certificate</h3>
      </div>
      <div className="content-container">
  <div className="content">
    <div className="center">
      <div className="linethick"></div>
    </div>

    <div className="dots">
      <div className="dot1"></div>
      <div className="dot2"></div>
      <div className="dot3"></div>
    </div>

    <Swiper className="dialogs" slidesPerView={1}>
    <SwiperSlide className="dialog">
            <div className="heading">Lorem, ipsum.</div>
            <p className="text">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, itaque?
            </p>
          </SwiperSlide><SwiperSlide className="dialog">
            <div className="heading">Lorem, ipsum.</div>
            <p className="text">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, itaque?
            </p>
          </SwiperSlide><SwiperSlide className="dialog">
            <div className="heading">Lorem, ipsum.</div>
            <p className="text">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, itaque?
            </p>
          </SwiperSlide><SwiperSlide className="dialog">
            <div className="heading">Lorem, ipsum.</div>
            <p className="text">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, itaque?
            </p>
          </SwiperSlide><SwiperSlide className="dialog">
            <div className="heading">Lorem, ipsum.</div>
            <p className="text">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, itaque?
            </p>
          </SwiperSlide><SwiperSlide className="dialog">
            <div className="heading">Lorem, ipsum.</div>
            <p className="text">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, itaque?
            </p>
          </SwiperSlide><SwiperSlide className="dialog">
            <div className="heading">Lorem, ipsum.</div>
            <p className="text">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, itaque?
            </p>
          </SwiperSlide>
    </Swiper>
  </div>
</div>
    </div>
  );
};

export default Progress;
