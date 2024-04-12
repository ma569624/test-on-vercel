"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
} from "react-share";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { FcShare } from "react-icons/fc";
import YouTube from "react-youtube";
import Model from "@/app/_component/model";
import { useRouter } from "next/router";

const Detail = (props) => {
  const { id, section } = props.params;
  const Category = section;

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  // const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState([]);
  const [videos, setVideos] = useState([]);

  const [blogs, setBlogs] = useState([]);
  const [data, setdata] = useState({});
  const API = props.API;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const MAX_WORDS = 18;

  function sliceByWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }

  const currentPageUrl =
    typeof window !== "undefined" ? window.location.href : "";
  //   const currentPageUrl = "dkjdjhf";
  console.warn(data);
  const title = data.Heading;
  const message = `Third Eye World News`;
  const sectionname = data.Category;
  const youtubechannel =
    "https://whatsapp.com/channel/0029Va65zjQKbYMGyJFMnh0y";
  const youtubeheading = "हमारे वाट्सअप चैनल को फॉलो करें।";

  const whatsAppUrl = `https://web.whatsapp.com/send?text= ${encodeURIComponent(
    `*${message}* \n\n *${sectionname}* \n ${data.Heading} \n *Link*:- ${currentPageUrl} \n\n *${youtubeheading}* \n ${youtubechannel} `
  )}`;
  // const whatsAppUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(`*${message}*%0A%0A*${sectionname}*%0A${data.Heading}%0A%0A*${youtubeheading}*%0A${youtubechannel}`)}&url=${currentPageUrl}`;
  const [sidename, setSideName] = useState([]);
  const [sidenamerajiya, setSideNameRajiya] = useState([]);

  const getdata = async () => {
    setCategory(props.toplinks);
    setSideName(props.blogdisplay);
    setSideNameRajiya(props.rajiya);
    setdata(props.newsdata);
  };

  useEffect(() => {
    getdata();
  }, [props]);

  useEffect(() => {
    setCurrentPage(1);
  }, [id]);

  const getblogs = async () => {
    const blogs = await fetch(
      `https://new-backend-server-production.up.railway.app/api/blogs?page=${currentPage}&limit=${limit}&Category=${data.Category}`
    );
    const blogdata = await blogs.json();
    setBlogs(blogdata.data);
  };

  useEffect(() => {
    getblogs();
  }, [currentPage, data, limit, id]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const LoadingNewdata = (NewId) => {
    const filteredBlog = blogs.filter(
      (item) => item._id.toString() == NewId.toString()
    );
    setdata(filteredBlog[0]);
  };

  const Khabare = () => {
    return (
      <div className="col-lg-4">
        <div className="section-title2 text-center mb-2 box-shodow">
          <h2>
            Khabare
            {sidename && sidename.SecondSection}
            {sidenamerajiya && sidenamerajiya.FirstLink}
          </h2>
        </div>

        {blogs.map((item, key) => {
          return (
            <div className="hero pos-relative mb-2 post-more" key={key}>
              <div className="hero__thumb" data-overlay="dark-gradient">
                <Image
                  height={195}
                  width={200}
                  src={item.Image && `${API}${item.Image}`}
                  // style={{ height: 195, }}
                  alt="hero image"
                  onClick={(e) => LoadingNewdata(item._id)}
                />
              </div>

              <div className="hero__text" style={{ padding: "0px 15px" }}>
                <h3 className="" onClick={(e) => LoadingNewdata(item._id)}>
                  {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}
                </h3>
              </div>
            </div>
          );
        })}

        <div className="pagination text-center">
          <ul>
            <li>
              <a
                className="hover-effect"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                पिछली ख़बर
              </a>
            </li>

            <li>
              <a className="hover-effect" onClick={nextPage}>
                अगली ख़बर
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const instagramProfileUrl = "https://www.instagram.com";

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <section className="post-details-area pt-3 pb-3">
        <div className="container">
          <div className="row" ref={componentRef}>
            <div className="col-xl-8 col-lg-8">
              <div className="section-title2  box-shodow">
                <h2 className="text-center">{data.Category}</h2>
              </div>
              <div className="post-details mt-2">
                <div ref={componentRef}>
                  <h1 className="details-title">
                    {data && data.Heading !== undefined && data.Heading}
                  </h1>
                  <h4 className="details-subheading">
                    {data && data.Subheading !== undefined && data.Subheading}
                  </h4>
                  <div className="post-content">
                    <div className="postbox__text-meta pb-2 mb-2">
                      <ul>
                        <li>
                          <i
                            className="far fa-user-circle"
                            style={{ fontSize: 12, color: "#000" }}
                          ></i>
                          <span
                            className="pr-2"
                            style={{ fontSize: 12, color: "#000" }}
                          >
                            आकाश श्रीवास्तव
                          </span>
                        </li>
                        <li>
                          <i
                            className="fas fa-calendar-alt "
                            style={{ fontSize: 12, color: "#000" }}
                          ></i>
                          <span
                            className="pr-2"
                            style={{ fontSize: 12, color: "#000" }}
                          >
                            16 feb 2024
                          </span>
                        </li>
                        <li>
                          <i
                            className="far fa-clock"
                            style={{ fontSize: 12, color: "#000" }}
                          ></i>{" "}
                          <span
                            className="pr-2"
                            style={{ fontSize: 12, color: "#000" }}
                          >
                            12:03:00
                          </span>
                        </li>
                        <li>
                          <i
                            className="far fa-clock"
                            style={{ fontSize: 12, color: "#000" }}
                          ></i>{" "}
                          <span
                            className="pr-2"
                            style={{ fontSize: 12, color: "#000" }}
                          >
                            Delhi
                          </span>
                        </li>
                        <li>
                          <i
                            className="far fa-comment"
                            style={{ fontSize: 12, color: "#000" }}
                          ></i>
                          <span style={{ fontSize: 12, color: "#000" }}>
                            (03)
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-4" style={{ display: "grid", gap: 2 }}>
                      {data !== undefined &&
                        data.ReporterImage !== undefined && (
                          <Image
                            width={87}
                            height={99}
                            src={
                              data.ReporterImage &&
                              `${API}${data.ReporterImage}`
                            }
                            style={{
                              marginBottom: "10px",
                              filter:
                                "drop-shadow(rgb(102, 102, 102) 6px 5px 4px)",
                            }}
                            alt=""
                          />
                        )}
                      <strong style={{ fontSize: 15, color: "#000" }}>
                        {data !== undefined &&
                          data.ReporterName !== undefined &&
                          data.ReporterName}
                      </strong>
                      <strong style={{ fontSize: 15, color: "#000" }}>
                        {data && data.DatePlace !== undefined
                          ? data.DatePlace
                          : "No date available"}
                      </strong>
                      <strong style={{ fontSize: 15, color: "#000" }}>
                        {data &&
                          data.Designation !== undefined &&
                          data.Designation}
                      </strong>
                    </div>
                    <div className="post-thumbmb-25">
                      {
                        <Image
                          src={data.Image && `${API}${data.Image}`} // Construct the full image URL
                          width={803}
                          height={454}
                          className="main-img"
                          alt="Image"
                        />
                      }
                      <strong
                        className="mt-2"
                        style={{ fontSize: 15, color: "#000" }}
                      >
                        this is capition
                      </strong>
                    </div>

                    <p style={{ fontSize: 18, lineHeight: 1.5 }}>
                      {data && data.Matter && (
                        <div
                          dangerouslySetInnerHTML={{ __html: data.Matter }}
                        />
                      )}
                    </p>
                  </div>
                </div>

                <div
                  className="row align-items-sm-center"
                  style={{ marginTop: "50px" }}
                >
                  <div className="col-lg-12 d-flex justify-content-between">
                    <div className="d-flex gap-2">
                      <div className="text-center">
                        <div
                          style={{
                            backgroundColor: "red",
                            padding: "3px 12px 3px 12px",
                            borderRadius: "40px ",
                            boxShadow: "rgb(255 0 0 / 53%) 3px 4px 4px 1px",
                          }}
                        >
                          <h4
                            className="text-right text-white m-0"
                            style={{
                              fontWeight: 900,
                              textShadow: "rgb(21 47 130) 4px 4px",
                            }}
                          >
                            प्रिंट करें
                          </h4>
                        </div>
                        <button
                          className="border-0 bg-white mt-2"
                          onClick={handlePrint}
                        >
                          <img
                            src="/printer.svg"
                            alt="print"
                            style={{
                              filter:
                                "drop-shadow(rgb(102, 102, 102) 4px 4px 1px )",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="text-center">
                      <div
                        style={{
                          backgroundColor: "red",
                          padding: "3px 12px 3px 12px",
                          borderRadius: "40px ",
                          boxShadow: "rgb(255 0 0 / 53%) 3px 4px 4px 1px",
                        }}
                      >
                        <h4
                          className="text-right text-white m-0"
                          style={{
                            fontWeight: 900,
                            textShadow: "rgb(21 47 130) 4px 4px",
                          }}
                        >
                          अपना सहयोग दें
                        </h4>
                      </div>
                      <button
                        className="border-0 bg-white mt-2"
                        onClick={toggleModal}
                      >
                        <img
                          src={"/Donate.svg"}
                          alt="help"
                          style={{
                            filter:
                              "drop-shadow(rgb(102, 102, 102) 4px 4px 1px )",
                            width: "30px",
                          }}
                        />
                      </button>
                    </div>

                    <div>
                      <div
                        style={{
                          backgroundColor: "red",
                          padding: "3px 12px 3px 12px",
                          borderRadius: "40px ",
                          boxShadow: "rgb(255 0 0 / 53%) 3px 4px 4px 1px",
                        }}
                      >
                        <h4
                          className="text-right text-white m-0"
                          style={{
                            fontWeight: 900,
                            textShadow: "rgb(21 47 130) 4px 4px",
                          }}
                        >
                          शेयर करें
                        </h4>
                      </div>
                      <ul className="article-share-icon mt-2">
                        <li>
                          {/* <span> */}
                          <span
                            style={{
                              border: "2px solid yellow",
                              height: "30px",
                              width: "30px",
                              backgroundColor: "#000",
                              borderRadius: "50%",
                              position: "relative",
                              boxShadow: "rgb(102, 102, 102) 3px 4px 4px 1px",
                            }}
                          >
                            <FcShare
                              size={22}
                              style={{
                                position: "absolute",
                                top: "15%",
                                left: "9%",
                              }}
                            />
                          </span>
                          <ul className="article-share-platform">
                            <li>
                              <a
                                data-activity="whatsapp_share"
                                data-action="share/whatsapp/share"
                                href={whatsAppUrl}
                                className="m-0"
                                target="_blank"
                                aria-label="Share on WhatsApp"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Hello world!"
                              >
                                <WhatsappIcon
                                  size={25}
                                  round
                                  style={{
                                    boxShadow:
                                      "rgba(62, 143, 11, 0.53) 3px 4px 4px 1px",
                                  }}
                                />
                              </a>
                            </li>
                            <li>
                              <FacebookShareButton
                                url={currentPageUrl}
                                quote={title}
                                style={{
                                  boxShadow:
                                    "rgba(62, 143, 11, 0.53) 3px 4px 4px 1px",
                                }}
                              >
                                <FacebookIcon
                                  title={"hello"}
                                  size={25}
                                  round={true}
                                />
                              </FacebookShareButton>
                            </li>
                            <li>
                              <TwitterShareButton
                                url={currentPageUrl}
                                quote={title}
                                style={{
                                  boxShadow:
                                    "rgba(62, 143, 11, 0.53) 3px 4px 4px 1px",
                                }}
                              >
                                <TwitterIcon size={25} round={true} />
                              </TwitterShareButton>
                            </li>

                            <li>
                              <a
                                data-activity="instagram_share"
                                data-action="share/instagram/share"
                                href={instagramProfileUrl}
                                className="m-0"
                                target="_blank"
                                aria-label="Share on Instagram"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Share on Instagram"
                                style={{
                                  display: "block",
                                  border: "none",
                                  width: "27px",
                                  height: "25px",
                                  position: "relative",
                                  boxShadow:
                                    "rgba(62, 143, 11, 0.53) 3px 4px 4px 1px",
                                }}
                              >
                                <img src="/email.svg" alt="" />
                              </a>
                            </li>
                            <li>
                              <TelegramShareButton
                                url={currentPageUrl}
                                quote={title}
                                style={{
                                  boxShadow:
                                    "rgba(62, 143, 11, 0.53) 3px 4px 4px 1px",
                                }}
                              >
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

            {data &&
              data.Category &&
              Array.isArray(data.Category) &&
              data.Category.length > 0 && <Khabare Rajiya={data.Category[0]} />}
          </div>
        </div>
      </section>
      <Model open={open} />
    </>
  );
};

export default Detail;
