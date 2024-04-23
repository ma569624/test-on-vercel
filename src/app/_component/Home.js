"use client";
import { useContext, useEffect, useState } from "react";

import TodayNew from "./TodayNew";
import { MdDoubleArrow } from "react-icons/md";
import Advert from "./Advert";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AppContext from "../_context/AppContext";

const Home = () => {
  const { badikhabar, toplinks } = useContext(AppContext);
  
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const API = process.env.NEXT_PUBLIC_BASE_URL;
  const [advert, setAdvert] = useState([]);
  console.warn(toplinks);
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/inner/${id}`);
  };

  console.warn(API);

  useEffect(() => {
    setCategory(toplinks);
    setAdvert(advert);
    setBlogs(badikhabar);
  }, []);

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
          <div className="">
            <div className="features_post_title">
              <Image
                width={200}
                height={80}
                src={
                  toplinks.length > 0
                    ? `${API}${toplinks[4].Image}`
                    : "/default.jpg"
                }
                alt=""
              />
              <MdDoubleArrow size={50} />
              <h2 className="title_text">
                {toplinks.length > 4 ? toplinks[4].name : <></>}
              </h2>
            </div>
            <div className="row">
              {badikhabar.slice(0, 12).map((item, key) => (
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
                    <h4 className="title" onClick={() => handleClick(item._id)}>
                      {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
