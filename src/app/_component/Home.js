"use client";
import { useEffect, useState } from "react";

import TodayNew from "./TodayNew";
import { MdDoubleArrow } from "react-icons/md";
import Advert from "./Advert";
import Image from "next/image";

const Home = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [category, setCategory] = useState([]);
  const API = props.API;
  const [advert, setAdvert] = useState([]);

  useEffect(() => {
    setCategory(props.toplinks);
    setAdvert(props.advert);
    setBlogs(props.badikhabar);
  }, [props]);

  const MAX_WORDS = 12;

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
      <TodayNew
        API={props.API}
        toplinks={props.toplinks}
        todaynews={props.todaynews}
      />
      <Advert advert={props.advert} endpoint={"top badi khabar"} />

      <section className="features-area">
        <div className="container p-lg-0">
          <div className="content-pad p-0">
            <div className="home-patti-tittle justify-content-center">
              <Image className="me-4 ml-1"
                width={200}
                height={200}
                src={category.length > 0 ? `${API}${category[4].Image}` : ""}
                alt=""
              />
              <MdDoubleArrow size={50} />
              <h2 className="title">
                {category.length > 4 ? category[4].name : <></>}
              </h2>
            </div>
            <div className="row">
              {blogs.slice(0, 9).map((item, key) => (
                <div className="col-lg-4" key={key}>
                  <div className="cat-sm-post">
                    <div className="post__small mb-1">
                      <div className="post__small-thumb f-left image-container">
                        <Image
                          width={200}
                          height={200}
                          src={`${API}${item.Image}`}
                          style={{
                            borderRadius: "12px",
                            width: "210px",
                            height: "140px",
                          }}
                          alt="hero image"
                        />
                      </div>

                      <div className="post__small-text fix pl-10">
                        <h4 className="title-16 pr-0 mt-0">
                          <a href={`/inner/${item._id}/mainnews`}>
                            {item.Heading &&
                              sliceByWords(item.Heading, MAX_WORDS)}
                          </a>
                        </h4>
                      </div>
                    </div>
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
                .filter((item, key) => item.location.includes("jara idhar bhi top"))
                .map((item) => (
                  <a
                    key={key}
                    target="_blank"
                    href={item.url ? item.url : `${API}${item.Image2}`}
                  >
                    <Image
                      width={200}
                      height={200}
                      style={{ width: "900px", height: "160px" }}
                      src={`${API}${item.Image1}`}
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
