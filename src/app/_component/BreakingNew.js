"use client";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdDoubleArrow } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const BreakingNew = () => {
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const swiperRef = useRef(null);
  const API = process.env.NEXT_PUBLIC_BASE_URL;
  const [breakingNews, setBreakingNews] = useState([]);
  const getbreaking = async () => {
    const res = await fetch(`${API}/api/blogs?Status=active&Headline=true`);
    const data = await res.json();
    setBreakingNews(data.data);
  };

  const handleMouseEnter = () => {
    // if (swiperRef.current && !autoplayPaused) {
    //   swiperRef.current.swiper.autoplay.stop();
    //   setAutoplayPaused(true);
    // }
  };

  const handleMouseLeave = () => {
    // if (swiperRef.current && autoplayPaused) {
    //   swiperRef.current.swiper.autoplay.start();
    //   setAutoplayPaused(false);
    // }
  };

  useEffect(() => {
    getbreaking();
  }, []);

  return (
    <section className="breaking patti-margin-bottom">
      <div className="container p-lg-0">
        <div className="row">
          <div className="col-12">
            <div className="breaking__wrapper align-items-center main box-shodow">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <h5 className="breaking__title flex-shrink-0  text-center">
                    Breaking News{" "}
                    <MdDoubleArrow style={{ color: "#fff" }} size={28} />
                  </h5>
                </div>
                <div className="col-lg-9" style={{ height: "fit-content" }} onMouseEnter={handleMouseEnter} // Call handleMouseEnter when mouse enters Swiper
                  onMouseLeave={handleMouseLeave} >
                  <Swiper
                  // ref={swiperRef} // Attach ref to the Swiper component
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
                    allowTouchMove={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    speed={8000}
                  >
                    {breakingNews.map((item, key) => (
                      <SwiperSlide key={key}>
                        <Link className="breaking__text" href={`/inner/${item._id}`}>
                          {item.Heading}
                        </Link>
                      </SwiperSlide>
                    ))}
                    
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
