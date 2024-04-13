import News from "./News";
import MainNews from "./MainNews";

import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TodayNew = (props) => {
  const [data, setdata] = useState([]);
  const [category, setCategory] = useState([]);
  const [toplink, setToplink] = useState([]);

  useEffect(() => {
    setCategory(props.toplinks);
    setdata(props.todaynews);
  }, [props]);

  const API = props.API;

  const [videos, setVideos] = useState([]);
  const apiKey = "AIzaSyAvgv1F4OfE_gtDlAtaikPgNxd-uxy-lm0";
  const channelId = "UC4qhbs7b2TEy2_dmd2xxXzw";
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data exists in local storage
        const storedVideos = localStorage.getItem("videos");

        // If data exists in local storage, set state with the stored data
        if (storedVideos) {
          setVideos(JSON.parse(storedVideos));
        } else {
          // Data doesn't exist in local storage, fetch from API
          // const response = await fetch(
          //   `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
          // );
          // const data = await response.json();
          // if (data.items) {
          //   setVideos(data.items);
          //   // Save fetched data to local storage
          //   localStorage.setItem('videos', JSON.stringify(data.items));
          // } else {
          //   console.error('No videos found');
          // }
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="news-area">
      <div className="container p-lg-0">
        <div className="row">
          <div className="col-lg-9">
            <div className="home-patti-tittle mb-2">
              <Image
                width={200}
                height={200}
                src={category.length > 0 ? `${API}${category[1].Image}` : ""}
                alt=""
              />
              <MdDoubleArrow size={50} />
              <h2 className="title">
                {category.length > 0 ? category[1].name : <></>}
              </h2>
            </div>
            <div className="row ">
              <div className="col-lg-6">
                {data.length > 0 ? (
                  <MainNews
                    API={props.API}
                    data={data[0]}
                    category={"primenews"}
                  />
                ) : (
                  <></>
                )}
              </div>
              <div className="col-lg-6">
                <div className="row">
                  {data.length > 1 ? (
                    <News
                      API={props.API}
                      data={data[1]}
                      category={"primenews"}
                    />
                  ) : (
                    <></>
                  )}

                  {data.length > 2 ? (
                    <News
                      API={props.API}
                      data={data[2]}
                      category={"primenews"}
                    />
                  ) : (
                    <></>
                  )}
                  {data.length > 3 ? (
                    <News
                      API={props.API}
                      data={data[3]}
                      category={"primenews"}
                    />
                  ) : (
                    <></>
                  )}
                  {data.length > 4 ? (
                    <News
                      API={props.API}
                      data={data[4]}
                      category={"primenews"}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="home-patti-side-tittle mb-1">
              <Link href="/youtube" className="d-flex align-items-center">
                <Image
                  width={200}
                  height={200}
                  src={category.length > 0 ? `${API}${category[2].Image}` : ""}
                  alt=""
                />

                <h2 className="title text-center hover-effect">
                  {category.length > 0 ? category[2].name : <></>}
                </h2>
              </Link>
            </div>

            <div className="postbox">
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
              <div className="home-patti-side-tittle">
                <a className="d-flex align-items-center hover-effect">
                  <Image
                    width={200}
                    height={200}
                    src={
                      category.length > 0 ? `${API}${category[3].Image}` : ""
                    }
                    alt=""
                  />
                  <h2 className="title text-center hover-effect">
                    {category.length > 0 ? category[3].name : <></>}
                  </h2>
                </a>
              </div>
            </div>
            <div className="postbox__thumb">
              <Image
                width={500}
                height={231}
                src="/ShowImage.gif"
                alt="hero image"
                style={{ borderRadius: "12px", width: "100%", height: 231 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayNew;
