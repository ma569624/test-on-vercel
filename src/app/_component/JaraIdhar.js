"use client";

import { useEffect, useState, useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MdDoubleArrow } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const JaraIdhar = (props) => {
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
  const [category, setCategory] = useState({});
  const router = useRouter();

  const handleClick = (id, category) => {
    router.push(`/Top/${id}`, { scroll: true });
  };

  const [data, setdata] = useState([]);
  const API = props.API;

  const MAX_WORDS = 12;

  function sliceByWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }
  const isClient = typeof window !== "undefined";
  useEffect(() => {
    setdata(props.idharbhi[0].data);
    setCategory(props.idharbhi[0].section);
  }, [props]);

  const handleNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="features-area jaraidhar_post_area mb-4">
      <div className="container p-lg-0">
        <div className="position-relative">
          <div className="jaraidhar_post_title">
            <button className="prev" onClick={handlePrevButtonClick}>
              <IoIosArrowBack size={35} />
            </button>
            <div className="d-flex align-items-center">
              
              <Image
                width={71}
                height={50}
                className="me-4 ml-1"
                src={category.categorylogo && `${API}${category.categorylogo}`}
                alt=""
              />
              <MdDoubleArrow size={50} />
              <h2 className="title_text">{category.category}</h2>
            </div>
            <button className="next" onClick={handleNextButtonClick}>
              <IoIosArrowForward size={35} />
            </button>
          </div>

          <div
            className="row mt-2"
            onMouseEnter={handleMouseEnter} // Call handleMouseEnter when mouse enters Swiper
            onMouseLeave={handleMouseLeave} // Call handleMouseLeave when mouse leaves Swiper
          >
            <div className="col-lg-12">
              <div className="" style={{ gap: "6px" }}>
                <Swiper
                  ref={swiperRef}
                  slidesPerView={isClient && window.innerWidth > 768 ? 5 : 1}
                  spaceBetween={6}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dots: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  style={{ backgroundColor: "#7a7171" }}
                >
                  {data &&
                    data.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="cat-sm-post">
                          <Image
                            width={227}
                            height={189}
                            src={
                              item.Image
                                ? `${API}${item.Image}`
                                : "/default.jpg"
                            }
                            alt="hero image"
                            onClick={handleClick}
                          />

                          <div className="text_box">
                            <h4
                              className=""
                              onClick={() => handleClick(item.order)}
                            >
                              {item.Heading &&
                                sliceByWords(item.Heading, MAX_WORDS)}
                            </h4>
                          </div>
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

export default JaraIdhar;
