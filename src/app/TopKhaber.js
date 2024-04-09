'use client'
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const TopKhaber = (props) => {

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


    const [data, setdata] = useState([])
    const API = props.API

    useEffect(() => {
        setdata(props.topKhabare)
    }, [])

    const MAX_WORDS = 8;

    function sliceByWords(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        } else {
            return text;
        }
    }

    return (
        <section className="hero-area" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='text-Shadow' style={{ backgroundColor: '#a01f1f', borderRadius: '7px', padding: 5, }} onMouseEnter={handleMouseEnter} // Call handleMouseEnter when mouse enters Swiper
                            onMouseLeave={handleMouseLeave} // Call handleMouseLeave when mouse leaves Swiper
                        >
                            <div className="" style={{ gap: '6px' }}>
                                <Swiper
                                    ref={swiperRef} // Attach ref to the Swiper component
                                    slidesPerView={5}
                                    spaceBetween={6}
                                    loop={true}
                                    autoplay={{
                                        delay: 20,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        dots: false,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                    speed={1000}
                                >
                                    
                                    {
                                        data && Array.isArray(data) && data.map((item, key) =>
                                            <SwiperSlide key={key}>
                                                <span className="slide filter">
                                                    <div className="hero pos-relative" style={{ width: '220px' }}>
                                                        <div className="hero__thumb" data-overlay="dark-gradient">
                                                            <Image
                                                                width={165}
                                                                height={165}
                                                                src={`${API}${item.Image}`}
                                                                style={{ height: 165, borderRadius: '8px' }}
                                                                alt="hero image"
                                                            />
                                                        </div>
                                                        <div className="hero__text hero__text-small">
                                                            <h3 className="pr-0 text-Shadow" style={{ fontWeight: 900, }}>
                                                                <Link href={`/inner/${item._id}/TopKhabare`}>
                                                                    {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}

                                                                </Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </span>
                                            </SwiperSlide>
                                        )
                                    }
                                    {
                                        data && Array.isArray(data) && data.map((item, key) =>
                                            <SwiperSlide key={key}>
                                                <span className="slide filter">
                                                    <div className="hero pos-relative" style={{ width: '220px' }}>
                                                        <div className="hero__thumb" data-overlay="dark-gradient">
                                                            <Image
                                                                width={165}
                                                                height={165}
                                                                src={`${API}${item.Image}`}
                                                                style={{ height: 165, borderRadius: '8px' }}
                                                                alt="hero image"
                                                            />
                                                        </div>
                                                        <div className="hero__text hero__text-small">
                                                            <h3 className="pr-0 text-Shadow" style={{ fontWeight: 900, }}>
                                                                <Link href={`/inner/${item._id}/TopKhabare`}>
                                                                    {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}

                                                                </Link>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </span>
                                            </SwiperSlide>
                                        )
                                    }

                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopKhaber;
