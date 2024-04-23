"use client";
import { useContext, useEffect, useState } from "react";
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
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { MdDoubleArrow } from "react-icons/md";
import AppContext from "@/app/_context/AppContext";

const Detail = (props) => {
  const {Rajiya} = useContext(AppContext)
  const router = useRouter();
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
  // console.warn(data);
  const newwindow = typeof window !== "undefined" && window;
  const title = data.Heading;
  const message = `Third Eye World News`;
  const sectionname = data.Category;
  const youtubechannel =
    "https://whatsapp.com/channel/0029Va65zjQKbYMGyJFMnh0y";
  const youtubeheading = "हमारे वाट्सअप चैनल को फॉलो करें।";

  const [windowWidth, setWindowWidth] = useState(newwindow.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(newwindow.innerWidth);
    };

    newwindow.addEventListener("resize", handleResize);

    return () => {
      newwindow.removeEventListener("resize", handleResize);
    };
  }, []);

  let whatsAppUrl;

  if (windowWidth <= 768) {
    // Mobile
    whatsAppUrl = `whatsapp://send?text=${encodeURIComponent(
      `\r*${message}*\n*${sectionname}*\n${data.Heading}\n*Link*:- ${currentPageUrl}\n\n*${youtubeheading}*\n${youtubechannel}`
    )}`;
  } else {
    // Desktop
    whatsAppUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(
      `\r*${message}*\n\n*${sectionname}*\n*${data.Heading}*\n${currentPageUrl}\n\n*${youtubeheading}*\n${youtubechannel}`
    )}`;
  }

  const newfburl = `https://www.facebook.com/share.php?u=${currentPageUrl}&title=${title}`;

  // const whatsAppUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(`*${message}*%0A%0A*${sectionname}*%0A${data.Heading}%0A%0A*${youtubeheading}*%0A${youtubechannel}`)}&url=${currentPageUrl}`;
  const [sidename, setSideName] = useState([]);
  const [sidenamerajiya, setSideNameRajiya] = useState([]);
  const [total, setSettotal] = useState("");

  const getdata = async () => {
    setCategory(props.toplinks);
    setSideNameRajiya(props.rajiya);
    setdata(props.newsdata);
  };
  const filterlogo = Rajiya.filter(item => item)
  console.warn(Rajiya[0].section)

  useEffect(() => {
    getdata();
  }, [props]);

  useEffect(() => {
    setCurrentPage(1);
  }, [id]);

  const getblogs = async () => {
    const blogs = await fetch(
      `${API}/api/blogs?Status=active&page=${currentPage}&limit=${limit}&Category=${data.Category}`
    );
    const blogdata = await blogs.json();
    // console.warn(blogdata);
    setBlogs(blogdata.data);
    setSettotal(blogdata.nbHits);
  };
  // console.warn(`this is ${data.Category}`)

  useEffect(() => {
    getblogs();
  }, [currentPage, limit, data.Category]);

  const getsection = async () => {
    const cat = await fetch(
      `${API}/api/blogdisplay?SectionName=${data.Category}`
    );
    const sectiondata = await cat.json();
    setSideName(sectiondata);
    console.warn(sectiondata);
  };
  useEffect(() => {
    getsection();
  }, [blogs]);

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
        <div
          className="section-title2 text-center mb-2 box-shodow"
          style={{ border: "4px solid yellow" }}
        >
          <h2 className="m-0 py-2">
            {sidename[0] ? sidename[0].SecondSection : "संबंधित की खबरें और भी"}
            {sidenamerajiya && sidenamerajiya.FirstLink}
          </h2>
        </div>

        {blogs.slice(0, 10).map((item, key) => {
          return (
            <div className="hero pos-relative mb-2 post-more" key={key}>
              <div className="hero__thumb">
                <div className="image-container3">
                  <Image
                    height={195}
                    width={200}
                    src={item.Image ? `${API}${item.Image}` : "/default.jpg"}
                    // style={{ height: 195, }}
                    alt="hero image"
                    onClick={(e) => LoadingNewdata(item._id)}
                  />
                </div>
              </div>

              <div className="hero__text">
                <h3 className="" onClick={(e) => LoadingNewdata(item._id)}>
                  {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}
                </h3>
              </div>
            </div>
          );
        })}
        <h6 className=" total-count text-center fs-6 bg-danger p-2 rounded-5 fw-bold text-white shadow">
          इस सेक्शन की कुल खबरें: {total}
        </h6>
        <div className="pagination text-center justify-content-center">
          <ul>
            <li>
              <a
                className="hover-effect me-3"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <TbPlayerTrackPrevFilled className="me-2 pb-1" size={25} />
                पिछली ख़बर
              </a>
            </li>

            <li>
              <a className="hover-effect" onClick={nextPage}>
                अगली ख़बर{" "}
                <TbPlayerTrackNextFilled size={25} className="ms-2 pb-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString("hi-IN", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // for AM/PM format
    });
    return formattedDate;
  };

  return (
    <>
      <section className="post-details-area pt-3 pb-3">
        <div className="container p-0">
          <div className="row" ref={componentRef}>
            <div className="col-xl-8 col-lg-8">
              <div
                className="patti-bg p-1 d-flex gap-2 align-items-center"
                style={{ border: "4px solid yellow" }}
              >
                
                {sidename && sidename[0] && sidename[0].Image1 && (
                  <Image
                    height={45}
                    width={105}
                    className="ms-4 rounded-3"
                    src={`${API}${sidename[0].Image1}`}
                  />
                )}
                
                {sidenamerajiya && sidenamerajiya[0] && sidenamerajiya[0].Image1 && (
                  <Image
                    height={45}
                    width={105}
                    className="ms-4 rounded-3"
                    src={`${API}${sidenamerajiya[0].Image1}`}
                  />
                )}
                <MdDoubleArrow size={50} className="text-white" />

                <h2 className="text-center mb-0 ms-4">{data.Category}</h2>
              </div>
              <div className="post-details ">
                <div ref={componentRef}>
                  <h1 className="details-title">
                    {data && data.Heading !== undefined && data.Heading}
                  </h1>
                  <h4 className="details-subheading">
                    {data && data.Subheading !== undefined && data.Subheading}
                  </h4>
                  <div className="post-content ps-2 mt-4">
                    <Image
                      width={87}
                      height={99}
                      src={
                        data.ReporterImage
                          ? `${API}${data.ReporterImage}`
                          : "/default_repoter.png"
                      }
                      style={{
                        marginBottom: "10px",
                        borderRadius: "50%",
                        filter: "drop-shadow(rgb(102, 102, 102) 1px 2px 3px)",
                      }}
                      alt=""
                    />
                    <div className="postbox__text-meta ">
                      <div className="small-meta-text d-grid">
                        <strong style={{ fontSize: 14, color: "#000" }}>
                          {data !== undefined &&
                            data.ReporterName !== undefined &&
                            data.ReporterName}
                        </strong>
                        <strong style={{ fontSize: 14, color: "#000" }}>
                          {data &&
                            data.Designation !== undefined &&
                            data.Designation}
                        </strong>
                        <strong style={{ fontSize: 14, color: "#000" }}>
                          {data && data.DatePlace !== undefined
                            ? data.DatePlace
                            : ""}
                        </strong>
                        <strong style={{ fontSize: 14, color: "#000" }}>
                          अपडेटेड {formatDate(data.CreationDate)}
                          {data && data.DatePlace !== undefined
                            ? data.DatePlace
                            : ""}
                        </strong>
                      </div>
                    </div>
                    <div
                      className="mb-4"
                      style={{ display: "grid", gap: 2 }}
                    ></div>
                    <div className="post-thumbmb-25">
                      {
                        <Image
                          src={data.Image && `${API}${data.Image}`} // Construct the full image URL
                          width={803}
                          height={454}
                          className="main-img mb-2"
                          alt="Image"
                        />
                      }
                      <strong
                        className="mt-2"
                        style={{ fontSize: 14, color: "#000" }}
                      >
                        {console.log(data)}
                        {data.Capton && data.Capton}
                      </strong>
                    </div>

                    <p
                      className="mt-4"
                      style={{ fontSize: 18, lineHeight: 1.5 }}
                    >
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
                    <div className="d-flex gap-2 ms-2">
                      <div className="text-center">
                        <div className="button-tag">
                          <h4 className="text-right text-white m-0 ">
                            प्रिंट करें
                          </h4>
                        </div>
                        <div
                          className="border-0 bg-white mt-2"
                          onClick={handlePrint}
                        >
                          <Image
                            width={100}
                            height={100}
                            src="/printer.svg"
                            alt="print"
                            style={{
                              filter:
                                "drop-shadow(rgb(102, 102, 102) 4px 4px 1px )",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="button-tag">
                        <h4 className="text-right text-white m-0">
                          अपना सहयोग दें
                        </h4>
                      </div>
                      <div className="mt-2" onClick={toggleModal}>
                        <Image
                          width={150}
                          height={200}
                          src={"/Donate.svg"}
                          alt="help"
                          style={{
                            filter:
                              "drop-shadow(rgb(102, 102, 102) 4px 4px 1px )",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="button-tag">
                        <h4 className="text-right text-white m-0">शेयर करें</h4>
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
                              <a
                                data-activity="whatsapp_share"
                                data-action="share/whatsapp/share"
                                href={newfburl}
                                className="m-0"
                                target="_blank"
                                aria-label="Share on WhatsApp"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Hello world!"
                              >
                                <FacebookIcon size={25} round={true} />
                              </a>
                              {/* <FacebookShareButton url={currentPageUrl} quote="this is" hashtag="this title" >
                                <FacebookIcon size={25} round={true} />
                              </FacebookShareButton> */}
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
                                href="gbg"
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
                                <Image
                                  width={30}
                                  height={30}
                                  src="/email.svg"
                                  alt=""
                                />
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
