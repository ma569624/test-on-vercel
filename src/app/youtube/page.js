'use client'

import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, } from "react-share"
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FcShare } from "react-icons/fc";
import Model from '../_component/model';
import Image from 'next/image';

const Page = () => {
    const [videos, setVideos] = useState([]);
    const apiKey = 'AIzaSyCgyLsmQ-V1EgGXKXIxuPosIz7J2NlmE8w';
    // const apiKey = 'AIzaSyAvgv1F4OfE_gtDlAtaikPgNxd-uxy-lm0';
    // https://www.youtube.com/channel/UC4qhbs7b2TEy2_dmd2xxXzw
    // const channelId = 'UCkFBSp6KH8H312TFXIXaHQg';
    const channelId = 'UC4qhbs7b2TEy2_dmd2xxXzw';
    const [open, setOpen] = useState(false);
    const toggleModal = () => {
        setOpen(!open);
    };

    const MAX_WORDS = 18;

    function sliceByWords(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        } else {
            return text;
        }
    }


    const currentPageUrl = '';
    const title = 'My Page Title';
    const message = `Third Eye World News`;
    const hashtag = "ख़बर";

    const whatsAppUrl = `https://web.whatsapp.com:/send?text=${encodeURIComponent(
        ` ${hashtag}\n\n${message} \n${currentPageUrl} \n\n Hamare Sath jude rahane ke liye `
    )}`;
    useEffect(() => {
        const storedVideos = localStorage.getItem('videos');

        // If data exists in local storage, set state with the stored data
        if (storedVideos) {
          setVideos(JSON.parse(storedVideos));
        }
        // const fetchData = async () => {
        //     try {
        //         // Calculate the date 10 days ago
        //         const tenDaysAgo = new Date();
        //         tenDaysAgo.setDate(tenDaysAgo.getDate() - 30);

        //         // Convert the date to ISO format
        //         const isoDate = tenDaysAgo.toISOString();
        //         const response = await fetch(
        //             `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=12&publishedAfter=${isoDate}`
        //         );
        //         const data = await response.json();
        //         if (data.items) {
        //             setVideos(data.items);
        //         } else {
        //             console.error('No videos found');
        //         }
        //     } catch (error) {
        //         console.error('Error fetching videos:', error);
        //     }
        // };

        // fetchData();
    }, []);
    const opts = {
        width: '100%', height: '280',
        // playerVars: {

        //   autoplay: 1,
        // },
    };
    const onReady = (event) => {
        event.target.pauseVideo();
    }

    return (
        <>
            <section className="news-area pt-2 pb-2">
                {/* trendy news */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center youtube-sec pt-3 pb-1 box-shodow">
                                <h2
                                >
                                    आपका अपना समाचार चैनल
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3" >
                        <div className="col-lg-12">
                            <div style={{ backgroundColor: '#91662d52', padding: 12, borderRadius: '12px' }}>

                                <div className="row">
                                    {videos.slice(0, 1).map((video, key) => (
                                        <div key={key} className="col-lg-12 mb-5">
                                            <div class="card min-h-100" style={{ borderRadius: '12px',backgroundColor: 'lightblue', boxShadow: 'rgb(255 0 0 / 26%) 3px 4px 4px 1px', minHeight: '100%' }} >
                                                {/* style={{ filter: 'drop-shadow(rgb(23, 137, 60) 7px 8px 13px)' }} */}
                                                <div className="video">
                                                    <YouTube 
                                                    className="card-img-top mt-5 mx-auto text-center"
                                                        videoId={video.id.videoId}
                                                        // onReady={onReady}
                                                        opts={{width: '90%', height: '550',filter: 'drop-shadow(7px 7px 4px #464b43)'}}
                                                    />
                                                    <div class="card-body text-center p-2">
                                                        <h3 style={{ fontSize: '24px', fontWeight: 800, lineHeight: '34px' }}>{video.snippet.title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {videos.slice(1, 12).map((video, key) => (
                                        <div key={key} className="col-lg-4 mb-5">
                                            <div class="card pt-2" style={{borderRadius: '12px',  backgroundColor: 'lightblue', boxShadow: 'rgb(255 0 0 / 26%) 3px 4px 4px 1px', minHeight: '100%', maxHeight: '408px' }} >
                                                {/* style={{ filter: 'drop-shadow(rgb(23, 137, 60) 7px 8px 13px)' }} */}
                                                <div className="video">
                                                    <YouTube class="card-img-top"
                                                        videoId={video.id.videoId}
                                                        // onReady={onReady}
                                                        opts={opts}
                                                    />
                                                    <div class="card-body">
                                                        <h3 className='' style={{ fontSize: '18px', fontWeight: 800, lineHeight: '28px', cursor: 'pointer' }}>{video.snippet.title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="row align-items-sm-center" style={{ marginTop: '50px' }}>
                                    <div className="col-lg-12 d-flex justify-content-between">
                                        

                                        <div className="text-center">
                                            <div style={{ backgroundColor: 'red', padding: '3px 12px 3px 12px', borderRadius: '40px ', boxShadow: "rgb(255 0 0 / 53%) 3px 4px 4px 1px" }}>
                                                <h4 className="text-right text-white m-0" style={{ fontWeight: 900, textShadow: 'rgb(21 47 130) 4px 4px' }}>
                                                    अपना सहयोग दें
                                                </h4>
                                            </div>
                                            <button className="border-0 bg-white mt-2" onClick={toggleModal}>
                                                <Image width={50} height={50} src={'/Donate.svg'} alt="help" style={{ filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )', width: '30px' }} />
                                            </button>
                                        </div>

                                        <div>
                                            <div style={{ backgroundColor: 'red', padding: '3px 12px 3px 12px', borderRadius: '40px ', boxShadow: "rgb(255 0 0 / 53%) 3px 4px 4px 1px" }}>
                                                <h4 className="text-right text-white m-0" style={{ fontWeight: 900, textShadow: 'rgb(21 47 130) 4px 4px' }} >
                                                    शेयर करें
                                                </h4>
                                            </div>
                                            <ul className="article-share-icon mt-2">
                                                <li>
                                                    {/* <span> */}
                                                    <span style={{ border: '2px solid yellow', height: '30px', width: '30px', backgroundColor: '#000', borderRadius: '50%', position: 'relative', boxShadow: 'rgb(102, 102, 102) 3px 4px 4px 1px' }}>
                                                        <FcShare size={22} style={{ position: 'absolute', top: '15%', left: '9%', }} />
                                                    </span>
                                                    <ul class="article-share-platform">
                                                        <li>
                                                            <a
                                                                data-activity="whatsapp_share"
                                                                data-action="share/whatsapp/share"
                                                                href={''}
                                                                className="m-0"
                                                                target="_blank"
                                                                aria-label="Share on WhatsApp"
                                                                data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!"
                                                            >
                                                                <WhatsappIcon size={25} round style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }} />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <FacebookShareButton url={currentPageUrl} quote={title} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }}>
                                                                <FacebookIcon title={'hello'} size={25} round={true} />
                                                            </FacebookShareButton>
                                                        </li>
                                                        <li>
                                                            <TwitterShareButton url={currentPageUrl} quote={title} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }}>
                                                                <TwitterIcon size={25} round={true} />
                                                            </TwitterShareButton>
                                                        </li>
                                                       
                                                        <li>
                                                            <a
                                                                data-activity="instagram_share"
                                                                data-action="share/instagram/share"
                                                                href={''}
                                                                className="m-0"
                                                                target="_blank"
                                                                aria-label="Share on Instagram"
                                                                data-tooltip-id="my-tooltip"
                                                                data-tooltip-content="Share on Instagram"
                                                                style={{ display: 'block', border: 'none', width: '27px', height: '25px', position: 'relative', boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }}
                                                            >
                                                                <Image width={90} height={90} src='/email.svg' alt="" />
                                                            </a>

                                                        </li>
                                                        <li>
                                                            <TelegramShareButton url={currentPageUrl} quote={title} style={{ boxShadow: 'rgba(62, 143, 11, 0.53) 3px 4px 4px 1px' }}>
                                                                <TelegramIcon size={24} round={true} />
                                                            </TelegramShareButton>
                                                        </li>
                                                        
                                                    </ul>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* trendy news end */}
            </section >
            <Model open={open} />


        </>
    )
}

export default Page