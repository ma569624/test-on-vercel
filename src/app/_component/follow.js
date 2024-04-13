'use client'

import React, { useState } from 'react';
import { FaShareAlt, FaFacebookF, FaTwitter, FaWhatsapp, FaGoogle, FaYoutube, FaTelegramPlane, FaInstagram } from 'react-icons/fa'; // Import required icons
import './follow.css'


function Follow() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIcon = () => {
        setIsOpen(prevState => !prevState);
    };
    const[show, setShow] = useState(false)

    return (
        <div className={isOpen ? 'share-button-wrap open-icon' : 'share-button-wrap'}>
            <div className="share-button-wrap__center-icon">
                {
                    show ? <span className='title-show'>हमें फॉलो करें</span> : ''
                }
                
                <div className="share-button-wrap__share-icon" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(!show)} onClick={toggleIcon}>
                    <i className="fa fa-share-alt"><FaShareAlt /></i>
                </div>

                <div className="share-button-wrap__social-icon-wrap">
                
                    <ul>
                        <li>
                            <i className="fa fa-facebook-f">
                                <a target='_blank' href="https://www.facebook.com/profile.php?id=100058813196394" className="container1 facebook">
                                    <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">
                                        <circle cx="100" cy="100" r="35" />
                                    </svg>
                                    <div className="social">
                                        <FaFacebookF size={21} />
                                    </div>
                                </a>
                            </i>
                        </li>

                        <li><i className="fa fa-linkedin">
                            <a target='_blank' href="https://twitter.com/TEWN2009" className="container1 google">
                                <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">
                                    <circle cx="100" cy="100" r="35" />
                                </svg>
                                <div className="social">
                                    <FaTwitter size={21} />
                                </div>
                            </a>
                        </i>
                        </li>
                        <li><i className="fa fa-twitter">
                            <a target='_blank' href="#" className="container1 google">
                                <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">
                                    <circle cx="100" cy="100" r="35" />
                                </svg>
                                <div className="social">
                                    <FaTelegramPlane size={21} />
                                </div>
                            </a>
                        </i></li>
                        <li><i className="fa fa-pinterest-p">
                            <a target='_blank' href="https://www.youtube.com/channel/UC4qhbs7b2TEy2_dmd2xxXzw" className="container1 google">
                                <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">
                                    <circle cx="100" cy="100" r="35" />
                                </svg>
                                <div className="social">
                                    <FaYoutube size={21} />
                                </div>
                            </a>
                        </i></li>
                        <li><i className="fa fa-google">
                            <a target='_blank' href="https://whatsapp.com/channel/0029Va65zjQKbYMGyJFMnh0y" className="container1 google">
                                <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">
                                    <circle cx="100" cy="100" r="35" />
                                </svg>
                                <div className="social">
                                    <FaWhatsapp size={21} />
                                </div>
                            </a>
                        </i></li>
                        <li><i className="fa fa-youtube">
                            <a target='_blank' href="#" className="container1 google">
                                <svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 200 200" className="circle">
                                    <circle cx="100" cy="100" r="35" />
                                </svg>
                                <div className="social">
                                    <FaInstagram size={21} />
                                </div>
                            </a>
                        </i></li>
                    </ul>

                </div>

            </div>

        </div >
    )
}

export default Follow


{/* <div className="col-xl-2 col-lg-2 col-md-6">
                                            <div className=" text-md-right">
                                                <ul className="article-share-icon1">
                                                    <li>
                                                        <button className='mt-1 ' style={{ marginRight: '5px', backgroundColor: '#c21515', color: 'white', fontWeight: 900, textShadow: 'rgb(21, 47, 130) 4px 4px', boxShadow: 'rgba(255, 0, 0, 0.53) 3px 4px 4px 1px', marginBottom: '9px', border: 'none', borderRadius: '15px', padding: '2px 8px 2px 8px ', fontWeight: 'bold', fontSize: '15px' }}> <span style={{ fontSize: '18px' }}>👈</span> Follow  </button>

                                                        <ul className="article-share-platform1">
                                                            <li>
                                                                <a href={'https://whatsapp.com/channel/0029Va65zjQKbYMGyJFMnh0y'} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} className='text-white' target='_blank'>
                                                                    <WhatsappIcon size={32} />
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href={'https://www.facebook.com/profile.php?id=100058813196394'} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} className='text-white' target='_blank'>
                                                                    <FacebookIcon size={32} />
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href={'https://www.youtube.com/channel/UC4qhbs7b2TEy2_dmd2xxXzw'} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} className='text-white' target='_blank'>
                                                                    <Image width={36} height={36} src={'youtube.svg'} style={{ width: "36px", height: '36px' }} alt="" />
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href={'https://twitter.com/TEWN2009'} className='text-white' style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} target='_blank'>
                                                                    <TwitterIcon size={32} />
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href={'https://t.me/+tq7kyiSQp184ZTJl'} className='text-white' style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} target='_blank'>
                                                                     <i className="fab fa-instagram" /> 
                                                                    <TelegramIcon size={32} />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div> */}