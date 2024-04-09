import { useEffect, useState, useRef } from 'react';
// import { a } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdDoubleArrow } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



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
  const [category, setCategory] = useState([])
  const router = useRouter();

  const handleClick = (id, category) => {
    router.push(`/inner/${id}`);
  };

  const [data, setdata] = useState([])
  const API = props.API;

  const MAX_WORDS = 12;

  function sliceByWords(text, maxWords) {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    } else {
      return text;
    }
  }

  useEffect(() => {
    setdata(props.idharbhi)
    setCategory(props.toplinks)
  }, [])

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
    <section className="features-area">
      <div className="container">
        <div className="content-pad border pb-0 position-relative">
          <div className="section-title d-flex align-items-center justify-content-between mb-1 main box-shodow" style={{
            // position: 'relative',
            borderRadius: '18px',
            paddingLeft: 25,
            paddingRight: 25,
            color: 'white',

          }}>
            <button className='prev' onClick={handlePrevButtonClick}><IoIosArrowBack size={35} style={{ fontWeight: 900, color: 'white', paddingRight: '2px' }} /></button>
            <div className='d-flex align-items-center'>
              <Image width={71} height={50} style={{ borderRadius: '8px', width: '80px', height: '50px', marginRight: '2px', padding: '2px', filter: 'drop-shadow(rgb(132, 85, 99) 4px 3px 1px)' }} className='me-4 ml-1' src={category.length > 0 ? `${API}${category[0].Image}` : ''} alt="" />
              <MdDoubleArrow size={50} />
              <h2
                style={{
                  textShadow: 'rgb(21, 47, 130) 4px 4px',
                  padding: 4,
                  margin: 0,
                  fontSize: 21,
                  color: 'white',
                }}
              >

                {
                  category.length > 0 ? category[0].name : <></>
                }

              </h2>
            </div>
            <button className='next' onClick={handleNextButtonClick}><IoIosArrowForward size={35} style={{ fontWeight: 900, color: 'white', paddingLeft: '2px' }} /></button>

          </div>

          <div className="row" onMouseEnter={handleMouseEnter} // Call handleMouseEnter when mouse enters Swiper
            onMouseLeave={handleMouseLeave} // Call handleMouseLeave when mouse leaves Swiper
          >
            <div className="col-lg-12 ">
              <div className="" style={{ gap: '6px' }}>
                <Swiper
                  ref={swiperRef} // Attach ref to the Swiper component
                  slidesPerView={5}
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
                >
                  {data.map((item, index) => (
                    <SwiperSlide key={index} className='h-auto'>
                      <div className="h-100" style={{maxHeight: '286px'}}>
                        <div className="cat-sm-post h-100" style={{ backgroundColor: '#86042e', borderRadius: '12px', overflow: 'hidden' }}>
                          <div className="post__small mb-2 h-100" style={{ display: 'grid' }}>
                            <div className="post__small-thumb f-left">
                              <Image
                                width={227}
                                height={189}
                                src={item.Image && `${API}${item.Image}`}
                                style={{ width: 227, height: 168, borderBottom: '1px solid white', cursor: 'pointer' }}
                                alt="hero image"
                                onClick={handleClick}
                              />
                            </div>

                            <div className="post__small-text jara" style={{ height: '126px' }}>
                              <h4 className="title-16 pr-0 mt-2 pl-2 pr-1"  onClick={() => handleClick(item._id)}>
                                {/* {item.Heading.slice(0, 61)}... */}
                                {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                  {data.map((item, index) => (
                    <SwiperSlide key={index} className='h-auto'>
                      <div className="h-100" style={{maxHeight: '286px'}}>
                        <div className="cat-sm-post h-100" style={{ backgroundColor: '#86042e', borderRadius: '12px', overflow: 'hidden' }}>
                          <div className="post__small mb-2 h-100" style={{ display: 'grid' }}>
                            <div className="post__small-thumb f-left">
                              <Image
                                width={227}
                                height={189}
                                src={item.Image && `${API}${item.Image}`}
                                style={{ width: 227, height: 168, borderBottom: '1px solid white', cursor: 'pointer' }}
                                alt="hero image"
                                onClick={handleClick}
                              />
                            </div>

                            <div className="post__small-text jara" style={{ height: '126px' }}>
                              <h4 className="title-16 pr-0 mt-2 pl-2 pr-1"  onClick={() => handleClick(item._id)}>
                                {/* {item.Heading.slice(0, 61)}... */}
                                {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                </Swiper>

              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>

            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default JaraIdhar;