'use client'
import { useEffect, useState } from 'react';

import { MdDoubleArrow } from "react-icons/md";


const Home = (props) => {
    const [blogs, setBlogs] = useState([])
    const [category, setCategory] = useState([])
    const API = props.API;
    const [advert, setAdvert] = useState([])


    useEffect(() => {
        setCategory(props.toplinks);
        setAdvert(props.advert)
        setBlogs(props.badikhabar)
    }, [])

    const MAX_WORDS = 12;

    function sliceByWords(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
          return words.slice(0, maxWords).join(' ') + '...';
        } else {
          return text;
        }
      }


    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-center mb-1 mt-1">
                            {
                                advert.filter(item => item.location.includes('top badi khabar')).map((item) => (
                                    <a target='_blank' href={item.url ? item.url : `${API}${item.Image2}`}><img style={{ width: '900px', height: '280px' }} src={`${API}${item.Image1}`} alt="" /></a>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <section className="features-area pb-2">
                <div className="container">
                    <div className="content-pad border pb-0">
                        <div className="section-title d-flex align-items-center justify-content-center mb-1 box-shodow text-Shadow" style={{
                            backgroundColor: '#a01f1f',
                            color: 'white',
                            borderRadius: '18px',
                        }}>

                            <img style={{ borderRadius: '8px', width: '71px', height: '50px', marginRight: '2px', padding: '2px', filter: 'drop-shadow(rgb(132, 85, 99) 4px 3px 1px)' }} className='me-4 ml-1' src={category.length > 0 ? `${API}${category[4].Image}` : ''} alt="" />
                            <MdDoubleArrow size={50} />
                            <h2
                                style={{
                                    padding: 13,
                                    margin: 0,
                                    fontSize: 21,
                                    color: 'white',
                                }}
                            >
                                {
                                    category.length > 4 ? category[4].name : <></>
                                }
                            </h2>
                        </div>

                        <div className="row">
                            {
                                blogs.slice(0, 9).map((item) =>
                                    <div className="col-lg-4">
                                        <div className="cat-sm-post">
                                            <div className="post__small mb-1">
                                                <div className="post__small-thumb f-left image-container">
                                                    <img
                                                        src={`${API}${item.Image}`}
                                                        style={{ borderRadius: '12px', width: '210px', height: '140px' }}
                                                        alt="hero image"
                                                    />
                                                </div>

                                                <div className="post__small-text fix pl-10">
                                                    <h4 className="title-16 pr-0 mt-0" >
                                                        <a href={`/inner/${item._id}/mainnews`}>
                                                            {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}
                                                        </a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section >

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-center mb-1 mt-1">
                            {
                                advert.filter(item => item.location.includes('jara idhar bhi top')).map((item) => (
                                    <a target='_blank' href={item.url ? item.url : `${API}${item.Image2}`}><img style={{ width: '900px', height: '160px' }} src={`${API}${item.Image1}`} alt="" /></a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Home
