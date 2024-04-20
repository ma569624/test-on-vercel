import News from "./News";
import MainNews from "./MainNews";

import YouTube from "react-youtube";
import { useEffect, useState, useRef, useContext } from "react";
import { MdDoubleArrow } from "react-icons/md";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AppContext from "../_context/AppContext";

const TodayNew = (props) => {
  const { badikhabar, todaynews, toplinks } = useContext(AppContext);

  const [data, setdata] = useState([]);

  // console.warn(todaynews)
  useEffect(() => {
    // settoplinks(toplinks);
    // setdata(todaynews);
  }, []);

  const API = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  const MAX_WORDS = 16;

  function sliceByWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }
  // Function to handle link click
  const handleClick = (id) => {
    router.push(`/inner/${id}`);
  };

  const [videos, setVideos] = useState([]);
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      // Find the title and channel elements inside the iframe and hide them
      const iframe = playerRef.current.getIframe();
      // Check if the iframe exists and if it has contentDocument
      if (iframe && iframe.contentDocument) {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        const titleElement = doc.querySelector(".ytp-title");
        const channelElement = doc.querySelector(".ytp-title-channel");

        if (titleElement && channelElement) {
          titleElement.style.display = "none";
          channelElement.style.display = "none";
        }
      }
    }
  }, [videos]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/youtube`
      );
      const data = await response.json();
      setVideos(data.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="news-area new_post_area mt-2 mb-3">
      <div className="container p-lg-0">
        <div className="row res-lg-space">
          <div className="col-lg-9">
            <div className="new_post_title">
              <Image
                width={200}
                height={200}
                
                src={toplinks.length > 0 && toplinks[1].Image !== undefined  && toplinks[1].Image !== 'undefined'  ? `${API}${toplinks[1].Image}` : ""}
                alt=""
              />
              <MdDoubleArrow size={50} />
              <h2 className="title_text">
                {toplinks.length > 0 ? toplinks[1].name : <></>}
              </h2>
            </div>
            <div className="news_postbox_wrapper">
              {/* <div className="col-lg-6"> */}
              {todaynews.length > 0 ? (
                <div className="single_post">
                  <div className="image-container">
                    <Image
                      width={500}
                      height={275}
                      src={todaynews[0].Image ? `${API}${todaynews[0].Image}` : "/default.jpg"}
                      alt="hero image"
                      onClick={() => handleClick(todaynews[0]._id)}
                    />
                  </div>
                  <div className="">
                    <h4
                      className="mainheading"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleClick(todaynews[0]._id)}
                    >
                      {/* {data.Heading}   */}
                      {todaynews[0].Heading &&
                        sliceByWords(todaynews[0].Heading, 20)}
                    </h4>
                    <div
                      className="containt"
                      dangerouslySetInnerHTML={{
                        __html:
                          todaynews && todaynews[0].Matter
                            ? sliceByWords(todaynews[0].Matter, 45)
                            : "",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="mutiple_small_post_wrapper">
                {todaynews.slice(1, 5).map((todaynews, index) => (
                  <div className="mutiple_small_post" key={index}>
                    <div className="image-container">
                      <Image
                        width={228}
                        height={165}
                        src={
                          todaynews.Image && todaynews.Image !== undefined
                            ? `${API}${todaynews.Image}`
                            : "/default.jpg"
                        }
                        alt="hero image"
                        onClick={() => handleClick(todaynews._id)}
                      />
                    </div>

                    <h4 className="" onClick={() => handleClick(todaynews._id)}>
                      {todaynews.Heading && sliceByWords(todaynews.Heading, 14)}
                    </h4>
                  </div>
                ))}
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="col-lg-3">
            <div className="new_post_title">
              <Link href="/youtube" className="d-flex align-items-center">
                <Image
                  width={200}
                  height={200}
                  src={toplinks.length > 0 ? `${API}${toplinks[2].Image}` : ""}
                  alt=""
                />

                <h2 className="title_text_side">
                  {toplinks.length > 0 ? toplinks[2].name : <></>}
                </h2>
              </Link>
            </div>

            <div className="postbox mb-1">
              {/* <div dangerouslySetInnerHTML={{ __html: item.youTubelink }} /> */}
              {/* {videos.slice(0, 1).map((video, key) => (
                <div key={key}>
                  <div className="video">
                    <YouTube
                      class="card-img-top"
                      videoId={video.id.videoId}
                      // onReady={onReady}
                      style={{ borderRadius: "20px" }}
                      opts={{
                        width: "100%",
                        height: "280",
                        borderRadius: "20px",
                      }}
                    />
                  </div>
                </div>
              ))} */}
              {videos.slice(0, 1).map((video, key) => (
                <div key={key}>
                  <div className="video">
                    <YouTube
                      className="card-img-top" // Use className instead of class
                      videoId={video.id[0].videoId} // Access videoId inside the id array
                      // onReady={onReady}
                      style={{ borderRadius: "20px" }}
                      containerClassName="youtube-video-container"
                      opts={{
                        width: "100%",
                        height: "280",
                        borderRadius: "20px",
                        playerVars: {
                          playsinline: 1,
                          autoplay: 1, // Disable autoplay
                          controls: 0, // Show player controls
                          modestbranding: 1, // Hide YouTube branding
                          rel: 0, // Do not show related videos at the end
                          showinfo: 0,
                        },
                      }}
                      onReady={(event) => {
                        playerRef.current = event.target;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="new_post_title">
              <a className="d-flex align-items-center hover-effect">
                <Image
                  width={200}
                  height={200}
                  src={toplinks.length > 0 ? `${API}${toplinks[3].Image}` : ""}
                  alt=""
                />
                <h2 className="title_text_side">
                  {toplinks.length > 0 ? toplinks[3].name : <></>}
                </h2>
              </a>
            </div>
            <div className="postbox__thumb">
              <Image
                width={500}
                height={228}
                src="/ShowImage.gif"
                alt="hero image"
                style={{ borderRadius: "12px", width: "100%", height: 228 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayNew;
