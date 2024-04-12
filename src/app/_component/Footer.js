'use client'

import ApradJagat from './ApradJagat';
import { useEffect, useState } from 'react';
import VotPoll from "./VotPoll";
import KhabreRajiyoki from './KhabreRajiyoki'
import { FacebookIcon, TelegramIcon, TwitterIcon, WhatsappIcon } from "react-share";
import JaraIdhar from "./JaraIdhar";
import Link from 'next/link';
import Model from './model';
import Advert from './Advert';
import Follow from './follow';
import Image from 'next/image'
import HitCounter from './hitCounter';


const Footer = (props) => {
    const API = props.API;

    const [open, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!open);
    };


    return (
        <>

            <Model open={open} />

            <JaraIdhar API={API} idharbhi={props.idharbhi} toplinks={props.toplinks} />
            <Advert advert={props.advert} endpoint={'jara idhar below'} />
            <ApradJagat allblogs={props.allblogs} />
            <Advert advert={props.advert} endpoint={'khabare rajiyo top'} />


            <KhabreRajiyoki allblogs={props.allblogs} />
            <Advert advert={props.advert} endpoint={'upper vote poll'} />

            <VotPoll />
            <Advert advert={props.advert} endpoint={'footer upper'} />

            <div className="container mt-1 ">
                <footer
                    className=" main "
                    style={{
                        borderRadius: '8px',
                    }}
                >
                    <div className="footer-bottom-area pt-1 pb-2 pl-4 pr-4">
                        <div className="container">
                            <div className="row mb-3 mt-3">
                                <div className="col-lg-12">
                                    <ul className="d-flex" style={{ gap: "1rem" }}>
                                        <li>

                                            <Link href={'/team'} className=' footer-tab hover-effect' >
                                                हमारी टीम
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/contact'} className=' footer-tab hover-effect' >
                                                हमारा पता / संपर्क करें
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/rules'} className=' footer-tab hover-effect' >
                                                नियम और शर्तें
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="footer-widget">
                                        <div className="row align-items-center">
                                            {/* <div className="col-lg-4 pr-0">
                                                <img
                                                    src="ShowImage.jpg"
                                                    className="border rounded"
                                                    alt=""
                                                    style={{ width: 120, boxShadow: "rgba(11, 11, 19, 0.25) 8px 6px 2px 1px" }}
                                                />
                                            </div> */}
                                            <div className="col-lg-6">
                                                <ul>
                                                    <li>
                                                        <span className="text-white" style={{ textShadow: 'rgb(21, 47, 130) 4px 4px', fontWeight: 900 }}>
                                                            नाम
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-white" style={{ textShadow: 'rgb(21, 47, 130) 4px 4px', fontWeight: 900 }}>डेजीनेशन</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-white" style={{ textShadow: 'rgb(21, 47, 130) 4px 4px', fontWeight: 900 }}> ईमेल आईडी </span>
                                                    </li>
                                                    <li>
                                                        <span className="text-white" style={{ textShadow: 'rgb(21, 47, 130) 4px 4px', fontWeight: 900 }}>
                                                            मोबाइल नंबर
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <Advert advert={props.advert} endpoint={'side mousam news'} /> */}


                    <div className="p-2" >
                        <div className="container">
                            <div className="row align-items-center">

                                <div className="col-lg-12">
                                    <div className="header__top-menu d-flex align-items-baseline justify-content-between">
                                        <Link href='tel: 9999999999' className='hover-effect flex-lg-shrink-0'>
                                            विज्ञापन के लिए संपर्क करें 👈
                                        </Link>
                                        <HitCounter />
                                        <div className='top box box-h hover-effect flex-lg-shrink-0' onClick={toggleModal}>
                                            अपना सहयोग दें <Image width={24} height={25} src={'/Donate.svg'} alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Advert advert={props.advert} endpoint={'footer below'} />


                    <div className="copyright-area main mt-1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-12 col-lg-12 col-md-6">
                                    <div className="copyright text-start p-1">
                                        <p className="text-center" style={{ fontWeight: 900, fontSize: '16px', textShadow: 'rgb(21, 47, 130) 4px 4px', }} >
                                            © Third Eye World News Copyrights 2024. All rights reserved.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Advert advert={props.advert} endpoint={'copyright upper'} />
                </footer>
            </div>
            <Follow />
        </>
    )
}

export default Footer;