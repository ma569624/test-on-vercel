"use client";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const BreakingNew = () => {
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const swiperRef = useRef(null);

  const API = process.env.NEXT_PUBLIC_BASE_URL;
  const [breakingNews, setBreakingNews] = useState([]);
  const [tajasamachar, settajasamachar] = useState([]);
  const getbreaking = async () => {
    const tajasamachar = await fetch(`${API}/api/tajasamachar?Status=true`);
    const res = await fetch(`${API}/api/blogs?Status=active&Headline=true`);
    const data = await res.json();
    const tajasamachardata = await tajasamachar.json();
    settajasamachar(tajasamachardata);
    setBreakingNews(data.data);
  };

  useEffect(() => {
    // Access Swiper instance and start autoplay
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

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
                <div className="col-lg-9" style={{ height: "fit-content" }}>
                  <Swiper
                    ref={swiperRef} // Attach ref to the Swiper component
                    centeredSlides={true}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                      delay: 1000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      dots: false,
                    }}
                    slidesPerView={1}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    speed={5000}
                  >
                    {/* <Swiper
                    ref={swiperRef} // Attach ref to the Swiper component
                    slidesPerView={2}
                    // spaceBetween={6}
                    loop={true}
                    autoplay={{
                      delay: 1000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                      dots: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    speed={1000}
                  > */}
                    {/* {tajasamachar &&
                      tajasamachar.map((item, key) => (
                        <SwiperSlide key={key}>
                          <div className="breaking__text">{item.Heading}</div>
                        </SwiperSlide>
                      ))} */}
                    {breakingNews &&
                      breakingNews.map((item, key) => (
                        <SwiperSlide key={key}>
                          <Link
                            className="breaking__text"
                            href={`/Top/${item.order}`}
                          >
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
