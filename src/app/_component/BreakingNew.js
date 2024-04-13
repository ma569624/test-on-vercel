"use client";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdDoubleArrow } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BreakingNew = () => {
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const swiperRef = useRef(null);

  return (
    <section className="breaking">
      <div className="container p-lg-0">
        <div className="row">
          <div className="col-12">
            <div
              className="breaking__wrapper align-items-center main box-shodow"
            >
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <h5 className="breaking__title flex-shrink-0  text-center">
                    Breaking News{" "}
                    <MdDoubleArrow style={{ color: "#fff" }} size={28} />
                  </h5>
                </div>
                <div className="col-lg-9" style={{height: 'fit-content'}}>
                    <Swiper
                      centeredSlides={true}
                      spaceBetween={0}
                      loop={true}
                      autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                        dots: false,
                      }}
                      slidesPerView={1}
                      allowTouchMove={false}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper"
                      speed={8000}
                    >
                      <SwiperSlide>
                        <a>
                          "प्रधानमंत्री की लक्ष्यद्वीप यात्रा से यह देश क्यों
                          तिलमिलाया है..पढ़िए ख़ास खबर"
                        </a>
                      </SwiperSlide>
                      <SwiperSlide>
                        <a>
                          "प्रधानमंत्री की लक्ष्यद्वीप यात्रा से यह देश क्यों
                          तिलमिलाया है..पढ़िए ख़ास खबर"
                        </a>
                      </SwiperSlide>
                    </Swiper>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingNew;
