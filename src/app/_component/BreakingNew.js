'use client'
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdDoubleArrow } from "react-icons/md";

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BreakingNew = () => {
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    console.warn('enet')
    if (swiperRef.current && !autoplayPaused) {
      swiperRef.current.swiper.autoplay.stop();
      setAutoplayPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && autoplayPaused) {
      swiperRef.current.swiper.autoplay.start();
      setAutoplayPaused(false);
    }
  };

  return (
    <section className="breaking mb-1" style={{ paddingBottom: 1, }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breaking__wrapper d-flex align-items-center main box-shodow pt-2 pb-2" style={{ borderRadius: '5px', border: '2px solid black', overflow: 'hidden' }} >
              <h5 className="breaking__title flex-shrink-0 p-0 pl-2">Breaking News <MdDoubleArrow style={{ color: '#fff' }} size={28} /></h5>
              <div className=" w-100" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                    <a className="text-white" style={{ padding: '6px 8px 0px 8px', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', fontSize: '18px', }}>
                      "प्रधानमंत्री की लक्ष्यद्वीप यात्रा से यह देश क्यों तिलमिलाया
                      है..पढ़िए ख़ास खबर"
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a className="text-white" style={{ padding: '6px 8px 0px 8px', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', fontSize: '18px', }}>
                      "प्रधानमंत्री की लक्ष्यद्वीप यात्रा से यह देश क्यों तिलमिलाया
                      है..पढ़िए ख़ास खबर"
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default BreakingNew;
