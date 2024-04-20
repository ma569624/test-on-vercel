"use client";

import { useEffect, useState, useRef, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";
import AppContext from "../_context/AppContext";

const TopKhaber = (props) => {
  const router = useRouter();
  const { topKhabare } = useContext(AppContext)

  const handleClick = (id) => {
    router.push(`/inner/${id}`);
  };

  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
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

  const [data, setdata] = useState([]);
  const API = props.API;



  const MAX_WORDS = 8;
  const isClient = typeof window !== "undefined";
  function sliceByWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }

  return (
    <section className="hero_post_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="text-Shadow"
              onMouseEnter={handleMouseEnter} // Call handleMouseEnter when mouse enters Swiper
              onMouseLeave={handleMouseLeave} // Call handleMouseLeave when mouse leaves Swiper
            >
              <div className="" style={{ gap: "6px" }}>
                <Swiper
                  ref={swiperRef} // Attach ref to the Swiper component
                  slidesPerView={isClient && window.innerWidth > 768 ? 5 : 1}
                  spaceBetween={6}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dots: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  speed={isClient && window.innerWidth > 768 ? 1000 : 0}
                >
                  {topKhabare &&
                    Array.isArray(topKhabare) &&
                    topKhabare.map((item, key) => (
                      <SwiperSlide key={key}>
                        <div
                          className="hero_post_box"
                          style={{
                            width:
                              isClient && window.innerWidth > 768
                                ? "220px"
                                : "auto",
                          }}
                        >
                          {item.Image !== undefined && (
                            <Image
                              width={165}
                              height={165}
                              src={item.Image !== undefined ? `${API}${item.Image}` : "/default.jpg"}
                              alt="hero image"
                            />
                          )}

                          <h3 onClick={() => handleClick(item._id)}>
                            {item.Heading &&
                              sliceByWords(item.Heading, MAX_WORDS)}
                          </h3>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopKhaber;
