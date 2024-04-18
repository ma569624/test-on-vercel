import News from "./News";
import MainNews from "./MainNews";

import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TodayNew = (props) => {
  const [data, setdata] = useState([]);
  const [category, setCategory] = useState([]);
  const [toplink, setToplink] = useState([]);

  useEffect(() => {
    setCategory(props.toplinks);
    setdata(props.todaynews);
  }, [props]);

  const API = props.API;
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
  // const apiKey = "AIzaSyAvgv1F4OfE_gtDlAtaikPgNxd-uxy-lm0";
  // const channelId = "UC4qhbs7b2TEy2_dmd2xxXzw";
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Check if data exists in local storage
  //       const storedVideos = localStorage.getItem("videos");

  //       // If data exists in local storage, set state with the stored data
  //       if (storedVideos) {
  //         setVideos(JSON.parse(storedVideos));
  //       } else {
  //         // Data doesn't exist in local storage, fetch from API
  //         // const response = await fetch(
  //         //   `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
  //         // );
  //         // const data = await response.json();
  //         // if (data.items) {
  //         //   setVideos(data.items);
  //         //   // Save fetched data to local storage
  //         //   localStorage.setItem('videos', JSON.stringify(data.items));
  //         // } else {
  //         //   console.error('No videos found');
  //         // }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching videos:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className="news-area new_post_area">
      <div className="container p-lg-0">
        <div className="row res-lg-space">
          <div className="col-lg-9">
            <div className="new_post_title">
              <Image
                width={200}
                height={200}
                src={category.length > 0 ? `${API}${category[1].Image}` : ""}
                alt=""
              />
              <MdDoubleArrow size={50} />
              <h2 className="title_text">
                {category.length > 0 ? category[1].name : <></>}
              </h2>
            </div>
            <div className="news_postbox_wrapper">
              {/* <div className="col-lg-6"> */}
              {data.length > 0 ? (
                <div className="single_post">
                  <div className="image-container">
                    <Image
                      width={500}
                      height={275}
                      src={data[0].Image && `${API}${data[0].Image}`}
                      alt="hero image"
                      onClick={() => handleClick(data[0]._id)}
                    />
                  </div>
                  <div className="">
                    <h4
                      className="mainheading"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleClick(data[0]._id)}
                    >
                      {/* {data.Heading}   */}
                      {data[0].Heading &&
                        sliceByWords(data[0].Heading, MAX_WORDS)}
                    </h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          data && data[0].Matter
                            ? sliceByWords(data[0].Matter, 45)
                            : "",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="mutiple_small_post_wrapper">
                {data.slice(1, 5).map((data, index) => (
                  <div className="mutiple_small_post" key={index}>
                    <div className="image-container">
                      <Image
                        width={228}
                        height={165}
                        src={
                          data.Image ? `${API}${data.Image}` : "/default.jpg"
                        }
                        alt="hero image"
                        onClick={() => handleClick(data._id)}
                      />
                    </div>

                    <h4 className="" onClick={() => handleClick(data._id)}>
                      {data.Heading && sliceByWords(data.Heading, MAX_WORDS)}
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
                  src={category.length > 0 ? `${API}${category[2].Image}` : ""}
                  alt=""
                />

                <h2 className="title_text_side">
                  {category.length > 0 ? category[2].name : <></>}
                </h2>
              </Link>
            </div>

            <div className="postbox mb-1">
              {/* <div dangerouslySetInnerHTML={{ __html: item.youTubelink }} /> */}
              {videos.slice(0, 1).map((video, key) => (
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
              ))}
            </div>
            <div className="new_post_title">
              <a className="d-flex align-items-center hover-effect">
                <Image
                  width={200}
                  height={200}
                  src={category.length > 0 ? `${API}${category[3].Image}` : ""}
                  alt=""
                />
                <h2 className="title_text_side">
                  {category.length > 0 ? category[3].name : <></>}
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
