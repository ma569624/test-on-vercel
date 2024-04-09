import News from './component/News';
import MainNews from './component/MainNews';
import YouTube from 'react-youtube';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { MdDoubleArrow } from "react-icons/md";
import React from 'react'
import ReactPlayer from 'react-player'
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'

const TodayNew = (props) => {
  // console.warn(props.todaynews);
  const API = "http://localhost:5000";
  const [data, setdata] = useState([])
  const [category, setCategory] = useState([])
  const [toplink, setToplink] = useState([])

  useEffect(() => {
    setCategory(props.toplinks)
    setdata(props.todaynews)
  }, [])

  const [videos, setVideos] = useState([]);
  const apiKey = 'AIzaSyAvgv1F4OfE_gtDlAtaikPgNxd-uxy-lm0';
  const channelId = 'UC4qhbs7b2TEy2_dmd2xxXzw';
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data exists in local storage
        const storedVideos = localStorage.getItem('videos');

        // If data exists in local storage, set state with the stored data
        if (storedVideos) {
          setVideos(JSON.parse(storedVideos));
        } else {
          // Data doesn't exist in local storage, fetch from API
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
          );
          const data = await response.json();
          if (data.items) {
            setVideos(data.items);

            // Save fetched data to local storage
            localStorage.setItem('videos', JSON.stringify(data.items));
          } else {
            console.error('No videos found');
          }
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="news-area mt-1 pb-1">
      <div>
        <div className="container">
          <div className="row row-10">
            <div className="col-40 pr-0">

              <div className="row ">
                <div className="col-lg-12 mb-1">
                  <div className="section-title d-flex align-items-center box-shodow" style={{
                    // backgroundColor: category.length > 0 ? category[1].background : 'red',
                    backgroundColor: '#a01f1f',
                    color: 'white',
                    borderRadius: '8px',
                    textShadow: 'rgb(21, 47, 130) 4px 4px',

                  }}>
                    <img style={{ borderRadius: '8px', width: '70px', height: '50px', marginRight: '2px', padding: '2px', filter: 'drop-shadow(rgb(132, 85, 99) 4px 3px 1px)' }} className='me-4 ml-1' src={category.length > 0 ? `${API}${category[1].Image}` : ''} alt="" />
                    <MdDoubleArrow size={50} />
                    <h2
                      style={{
                        padding: 4,
                        margin: 0,
                        fontSize: 21,
                        color: 'white',
                      }}
                    >
                      {
                        category.length > 0 ? category[1].name : <></>
                      }
                    </h2>
                  </div>

                </div>
                <div className="col-lg-6" style={{ paddingRight: 0 }}>
                  {
                    data.length > 0 ? <MainNews data={data[0]} category={'primenews'} /> : <></>
                  }
                </div>
                <div className="col-lg-6 pl-10 pr-0">
                  <div className="d-flex flex-wrap gap-3" style={{ gap: '.5rem' }}>

                    {
                      data.length > 1 ? <News data={data[1]} category={'primenews'} /> : <></>
                    }
                    {
                      data.length > 2 ? <News data={data[2]} category={'primenews'} /> : <></>
                    }
                    {
                      data.length > 3 ? <News data={data[3]} category={'primenews'} /> : <></>
                    }
                    {
                      data.length > 4 ? <News data={data[4]} category={'primenews'} /> : <></>
                    }

                  </div>
                </div>
              </div>


            </div>
            <div className="col-20 ">
              <div className="section-title mb-1 box-shodow " style={{
                backgroundColor: '#a01f1f',
                // backgroundColor: category.length > 0 ? category[2].background : 'transparent', color: color.TextColor2,
                color: 'white',
                borderRadius: '8px',
                textShadow: 'rgb(21, 47, 130) 4px 4px',
              }}>
                <Link href={'/youtube'} className='d-flex align-items-center'>


                  <img style={{ borderRadius: '8px', width: '80px', height: '50px', marginRight: '2px', padding: '2px', filter: 'drop-shadow(rgb(132, 85, 99) 4px 3px 1px)' }} className='me-2 ml-2' src={category.length > 0 ? `${API}${category[2].Image}` : ''} alt="" />

                  <h2
                    style={{
                      padding: 8,
                      margin: 0,
                      fontSize: 18,
                      color: 'white',
                    }}
                    className='flex-fill text-center hover-effect'
                  >
                    {/* {data[0].Heading} */}
                    {
                      category.length > 0 ? category[2].name : <></>
                    }
                  </h2>

                </Link>
              </div>


              <div className="postbox">
                {/* <div dangerouslySetInnerHTML={{ __html: item.youTubelink }} /> */}
                {videos.slice(0, 1).map((video) => (
                  <div key={video.id.videoId}>
                    <div className="video">
                      <YouTube class="card-img-top"
                        videoId={video.id.videoId}
                        // onReady={onReady}
                        style={{ borderRadius: '20px' }}
                        opts={{ width: '327', height: '280', borderRadius: '20px' }}
                      />
                    </div>
                  </div>
                ))}
                <div className="section-title mb-1 box-shodow" style={{
                  backgroundColor: '#a01f1f',
                  // backgroundColor: category.length > 0 ? category[2].background : 'transparent', color: color.TextColor2,
                  color: 'white',
                  borderRadius: '8px',
                  textShadow: 'rgb(21, 47, 130) 4px 4px',
                }}>
                  <a className='d-flex align-items-center hover-effect'>
                    <img style={{ borderRadius: '8px', width: '80px', height: '50px', marginRight: '2px', padding: '2px', filter: 'drop-shadow(rgb(132, 85, 99) 4px 3px 1px)' }} className='me-2 ml-2' src={category.length > 0 ? `${API}${category[3].Image}` : ''} alt="" />
                    <h2
                      style={{
                        padding: 8,
                        margin: 0,
                        fontSize: 18,
                        color: 'white',
                      }}
                      className='flex-fill text-center'
                    >
                      {/* {data[0].Heading} */}
                      {
                        category.length > 0 ? category[3].name : <></>
                      }
                    </h2>

                  </a>
                </div>

              </div>
              {/* <div className="postbox mb-15"> */}
              <div className="postbox__thumb">
                <img
                  src="ShowImage.gif"
                  alt="hero image"
                  style={{ borderRadius: '12px', width: '100%', height: 231 }}
                />

              </div>

            </div>


          </div>
        </div>
      </div>
    </section >
  )
}

export default TodayNew