"use client";

import { useContext, useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageTag from "./ImageTag";
import AppContext from "../_context/AppContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchallblogsbyblock } from "../_service_Api/ServiceAPI";

const ApradJagat = (props) => {
  const { setShowFooter } = useContext(AppContext);
  // console.warn(AllBlogs);
  const [AllBlogs, setAllBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [Totalpage, setTotalPage] = useState(0);
  const router = useRouter();
 

  const MAX_WORDS = 10;

  function sliceByWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }

  function extractFirstPTag(htmlString, minLength, textlimt) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const paragraphs = Array.from(doc.querySelectorAll("p"));
    for (const paragraph of paragraphs) {
      let text = paragraph.textContent.trim();
      // Remove &nbsp; entities
      text = text.replace(/&nbsp;/g, "");
      // Remove special characters
      text = text.replace(/[^a-zA-Z0-9\s]/g, "");

      if (text.length >= minLength) {
        return sliceByWords(paragraph.outerHTML, textlimt);
      }
    }
    return "";
  }

  // const handleRouteChange = () => {
  //   window.scrollTo({ top: 500, behavior: 'smooth' }); // Scroll to the desired position
  // };
  // Function to handle link click

  const handleClick = (id) => {
    window.scrollTo({ top: 500, behavior: "smooth" });
    router.push(`/Top/${id}`);
  };

  const API = process.env.NEXT_PUBLIC_BASE_URL;
  const fetchMoreData = async () => {
    try {
      

      const data = await fetchallblogsbyblock(page)
      if (page === 1) {
        // For the initial load, set totalPage and AllBlogs directly
        setTotalPage(data.nbHits);
        setAllBlogs(data.data);
      } else {
        // For subsequent page loads, append new data to existing AllBlogs
        setAllBlogs((prevBlogs) => [...prevBlogs, ...data.data]);
      }
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching all blogs:", error);
    } finally {
      // setLoading(false); // Set loading state to false after fetch operation completes
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, []);
  
  useEffect(() => {
    if (page === Totalpage) {
      setShowFooter(true)
    }
  }, [page]);

  const NewsRow = ({ Rajiya }) => {
    // console.warn(Object.values(Rajiya)[0])
    const [data, setData] = useState([]);
    useEffect(() => {
      // const filteredData = props.allblogs.filter((item) =>
      //   item.Category.includes(Rajiya)
      // );
      setData(Rajiya);
    }, [Rajiya]);

    return (
      <div className="news_postbox_wrapper">
        {/* <div className="col-lg-6"> */}
        {data.length > 0 ? (
          <div className="single_post">
            <div className="image-container">
              <Image
                width={500}
                height={275}
                src={data[0].Image ? `${API}${data[0].Image}` : "/default.jpg"}
                alt="hero image"
                onClick={() => handleClick(data[0].order)}
              />
              {/* <ImageTag width={500}
                height={275}
                src={`${data[0].Image}`} /> */}
            </div>
            <div className="">
              <h4 onClick={() => handleClick(data[0].order)}>
                {/* {data.Heading}   */}
                {data[0].Heading && sliceByWords(data[0].Heading, 20)}
              </h4>

              <div
                className="containt"
                dangerouslySetInnerHTML={{
                  __html:
                    data && data[0].Matter
                      ? extractFirstPTag(data[0].Matter, 46, 80)
                      : "",
                }}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* </div> */}

        {/* <div className="col-lg-6"> */}
        <div className="mutiple_small_post_wrapper">
          {data.slice(1, 5).map((item, key) => {
            return (
              <div className="mutiple_small_post" key={key}>
                <div className="image-container">
                  <Image
                    width={298}
                    height={165}
                    // src={data.Image && `${API}${data.Image}`}
                    src={item.Image ? `${API}${item.Image}` : "/default.jpg"}
                    alt="hero image"
                    onClick={() => handleClick(item.order)}
                  />
                </div>

                <h4 onClick={() => handleClick(item.order)}>
                  {item.Heading && sliceByWords(item.Heading, 14)}
                </h4>
                <div
                  className="containt"
                  dangerouslySetInnerHTML={{
                    __html:
                      item && item.Matter
                        ? extractFirstPTag(item.Matter, 46, 20)
                        : "",
                  }}
                />
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    );
  };
  const SideRow = ({ Rajiya }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      // const filteredData = props.allblogs.filter((item) =>
      //   item.Category.includes(Rajiya)
      // );
      setData(Rajiya);
    }, [Rajiya]);

    return (
      <>
        {data.slice(5, 11).map((item, key) => {
          return (
            <div className="news_postbox_wrapper_side" key={key}>
              <div className="image-container">
                <Image
                  width={198}
                  height={113}
                  // src={`${API}${data.Image}`}
                  src={item.Image ? `${API}${item.Image}` : "/default.jpg"}
                  alt="hero image"
                  onClick={() => handleClick(item.order)}
                />
              </div>
              <h4 onClick={() => handleClick(item.order)}>
                {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}
              </h4>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <section className="news-area new_post_area">
      <InfiniteScroll
        dataLength={AllBlogs.length}
        next={fetchMoreData}
        hasMore={page <= Totalpage}
        loader={
          <div className="row">
            <div className="col-lg-2 mx-auto">
            <div class="spinner-border text-center" role="status">
              <span class="visually-hidden text-center">Loading...</span>
            </div>
            </div>
          </div>
        }
        style={{ overflow: "hidden" }}
        // endMessage={setShowFooter(false)}
      >
        <div className="container p-lg-0">
          {AllBlogs &&
            AllBlogs.map((item, key) => (
              <div className="row mb-1" key={key}>
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
                    {/* {console.warn(item.data)} */}
                    <h2 className="title_text">{item.section.category}</h2>
                  </div>
                  <NewsRow Rajiya={item.data} />
                </div>
                <div className="col-lg-3">
                  <div
                    className="new_post_title"
                    style={{ backgroundColor: item.section.headingbackground }}
                  >
                    <Image
                      width={200}
                      height={200}
                      src={
                        item.section.headinglogo &&
                        `${API}${item.section.headinglogo}`
                      }
                      alt=""
                    />
                    <h2 className="title_text_side">{item.section.heading}</h2>
                  </div>
                  <SideRow Rajiya={item.data} />
                </div>
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default ApradJagat;
