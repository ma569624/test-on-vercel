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
import { fetchTodayNews, fetchTopLinks, fetchyoutube } from "../_service_Api/ServiceAPI";

const TodayNew = () => {
  // const { todaynews, toplinks } = useContext(AppContext);
  const [todaynews,settodaynews] = useState([])
  const [toplinks,settoplinks] = useState([])

  const getdata = async () => {
    const response = await fetchTodayNews();
    const responsetop = await fetchTopLinks();
    // console.warn('fetchTodayNews',response)
    console.warn('fetchTopLinks',responsetop)
    if (response) {
      settodaynews(response.data)
    }
    if (responsetop) {
      settoplinks(responsetop)
    }
  }
  useEffect(() => {
    getdata()
  },[])

  const API = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
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
    router.push(`/Top/${id}`);
  };

  const [videos, setVideos] = useState([]);
  const playerRef = useRef(null);


  const fetchData = async () => {
    try {
      
      const data = await fetchyoutube()
      console.warn("fetchyoutube",data)
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
        
        {todaynews &&
          todaynews.map((item, key) => (
            <div className="row res-lg-space" key={key}>
              <div className="col-lg-9">
              <div
                  className="new_post_title"
                  style={{ backgroundColor: item.section.categorybackground }}
                >
                  <Image
                    width={200}
                    height={200}
                    src={
                      item.section.categorylogo &&
                      `${API}${item.section.categorylogo}`
                    }
                    alt=""
                  />
                  <MdDoubleArrow size={50} />
                  <h2 className="title_text">{item.section.category}</h2>
                </div>
                <div className="news_postbox_wrapper">
                  {item.data ? (
                    <div className="single_post">
                      <div className="image-container">
                        <Image
                          width={500}
                          height={275}
                          src={
                            item.data[0].Image
                              ? `${API}${item.data[0].Image}`
                              : "/default.jpg"
                          }
                          alt="hero image"
                          onClick={() => handleClick(item.data[0].order)}
                        />
                      </div>
                      <div className="">
                        <h4 onClick={() => handleClick(item.data[0].order)}>
                          {/* {data.Heading}   */}
                          {item.data[0].Heading &&
                            sliceByWords(item.data[0].Heading, 20)}
                        </h4>
                        <div
                          className="containt"
                          dangerouslySetInnerHTML={{
                            __html:
                            item.data && item.data[0].Matter
                                ? sliceByWords(item.data[0].Matter, 45)
                                : "",
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="mutiple_small_post_wrapper">
                    {item.data &&
                      item.data.slice(1, 5).map((todaynews, index) => (
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
                              onClick={() => handleClick(todaynews.order)}
                            />
                          </div>

                          <h4
                            className=""
                            onClick={() => handleClick(todaynews.order)}
                          >
                            {todaynews.Heading &&
                              sliceByWords(todaynews.Heading, 14)}
                          </h4>
                        </div>
                      ))}
                  </div>
                  {/* </div> */}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="new_post_title">
                  <Link href="/VideoNews" className="d-flex align-items-center">
                    <Image
                      width={200}
                      height={200}
                      src={
                        toplinks?.[0]?.Image !== undefined ? `${API}${toplinks[0].Image}` : ""
                      }
                      alt=""
                    />

                    <h2 className="title_text_side">
                      {toplinks ? toplinks?.[0]?.name : <></>}
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
                              autoplay: 0, // Disable autoplay
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
                      src={
                        toplinks?.[1]?.Image !== undefined ? `${API}${toplinks[1].Image}` : ""
                      }
                      alt=""
                    />
                    <h2 className="title_text_side">
                      {toplinks?.length > 1 ? toplinks?.[1]?.name : <></>}
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
          ))}
      </div>
    </section>
  );
};

export default TodayNew;
