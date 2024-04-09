import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { a } from 'react-router-dom';

const Scrolbar = ({data}) => {
//   const API = "https://news-backend-production.up.railway.app";
  const API = 'http://localhost:5000';
    
    const responsive = {
        deskhrefp: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slideshrefSlide: 3, // optional, default href 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slideshrefSlide: 2, // optional, default href 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slideshrefSlide: 1, // optional, default href 1.
        },
    };

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means href render carousel on server-side.
            infinite={true}
            auhrefPlay={true}
            auhrefPlaySpeed={1000}
            keyBoardControl={true}
            cushrefmTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            deviceType={'deskhrefp'}
            dotListClass="cushrefm-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {/* Add your carousel items here */}
            {
                data.map((item) =>
                    <div className="col-lg-4">
                        <div className="cat-sm-post">
                            <div className="post__small mb-2">
                                <div className="post__small-thumb f-left">
                                    <img
                                        src={`${API}${item.Image}`}
                                        style={{ width: 190, height: 125 }}
                                        alt="hero image"
                                    />
                                </div>
                                <div className="post__small-text fix pl-10">
                                    <h4 className="title-16 pr-0 mt-0">
                                        <a href={`/inner/${item._id}`}>
                                            {item.Heading}
                                        </a>
                                    </h4>

                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </Carousel>
    );
};

export default Scrolbar;
