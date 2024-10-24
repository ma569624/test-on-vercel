"use client";
import { useContext, useEffect, useState } from "react";

import TodayNew from "./TodayNew";
import { MdDoubleArrow } from "react-icons/md";
import Advert from "./Advert";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AppContext from "../_context/AppContext";
import { fetchBadikhabar, fetchTopLinks } from "../_service_Api/ServiceAPI";

const Home = () => {
  // const { badikhabar, toplinks } = useContext(AppContext);

  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const API = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const [advert, setAdvert] = useState([]);

  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/Top/${id}`);
  };

  const getdata = async () => {
    const response = await fetchBadikhabar();
    const responsetop = await fetchTopLinks();
    // console.warn('fetchTodayNews',response)
    // console.warn('fetchTopLinks',responsetop)
    if (response) {
      setBlogs(response.data)
    }
    if (responsetop) {
      setCategory(responsetop.data)
    }
  }
  useEffect(() => {
    getdata()
    setAdvert(advert);
  },[])

  // useEffect(() => {
  //   // setCategory(toplinks);
  //   // setBlogs(badikhabar);
  // }, []);

  const MAX_WORDS = 11;

  function sliceByWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }

  return (
    <main>
      <TodayNew />
      <Advert advert={advert} endpoint={"top badi khabar"} />

      <section className="features_post_area">
        <div className="container p-lg-0">
          {blogs &&
            blogs?.map((item, key) => (
              <div className="" key={key}>
                <div
                  className="features_post_title"
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
                <div className="row">
                  {item.data &&
                    item.data.slice(0, 12).map((item, key) => (
                      <div className="col-lg-4" key={key}>
                        <div className="post_wraper">
                          <div className="image-container">
                            <Image
                              width={200}
                              height={200}
                              src={
                                item.Image !== undefined
                                  ? `${API}${item.Image}`
                                  : "/default.jpg"
                              }
                              alt="hero image"
                            />
                          </div>
                          <h4
                            className="title"
                            onClick={() => handleClick(item.order)}
                          >
                            {item.Heading &&
                              sliceByWords(item.Heading, MAX_WORDS)}
                          </h4>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center mb-1 mt-1">
              {advert
                .filter((item) => item.location.includes("jara idhar bhi top"))
                .map((item, key) => (
                  <a
                    key={key}
                    target="_blank"
                    href={item.url ? item.url : `${API}${item.Image2}`}
                  >
                    <Image
                      width={200}
                      height={200}
                      style={{ width: "900px", height: "160px" }}
                      src={
                        item.Image1 !== undefined
                          ? `${API}${item.Image1}`
                          : "/default.jpg"
                      }
                      alt=""
                    />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
