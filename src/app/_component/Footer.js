"use client";

import ApradJagat from "./ApradJagat";
import { useEffect, useState } from "react";
import VotPoll from "./VotPoll";
import KhabreRajiyoki from "./KhabreRajiyoki";
import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import JaraIdhar from "./JaraIdhar";
import Link from "next/link";
import Model from "./model";
import Advert from "./Advert";
import Follow from "./follow";
import Image from "next/image";
import HitCounter from "./hitCounter";
import { MdAirplanemodeActive } from "react-icons/md";

const Footer = (props) => {
  const API = props.API;

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };
  const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset;

  //     // Show button when user scrolls beyond a certain threshold (e.g., 100 pixels)
  //     setShowButton(scrollTop > 1800 && scrollTop !== 0);
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Remove scroll event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton ? (
        <button
          className={`scroll-to-top-button ${showButton ? "show" : "hide"}`}
          onClick={scrollToTop}
        >
          <MdAirplanemodeActive size={40} />
        </button>
      ) : (
        <></>
      )}

      <Model open={open} />

      <JaraIdhar
        API={API}
        idharbhi={props.idharbhi}
        toplinks={props.toplinks}
      />
      <Advert advert={props.advert} endpoint={"jara idhar below"} />
      <ApradJagat allblogs={props.allblogs} />
      <Advert advert={props.advert} endpoint={"khabare rajiyo top"} />

      <KhabreRajiyoki allblogs={props.allblogs} />
      <Advert advert={props.advert} endpoint={"upper vote poll"} />

      <VotPoll />
      <Advert advert={props.advert} endpoint={"footer upper"} />

      <footer>
        <div className="container p-0">
          <div className="main">
            <div className="row">
              <div className="col-lg-12">
                <ul className="sec-tag">
                  <li>
                    <Link href={"/team"} className="hover-effect">
                      हमारी टीम
                    </Link>
                  </li>

                  <li>
                    <Link href={"/contact"} className="hover-effect">
                      हमारा पता / संपर्क करें
                    </Link>
                  </li>

                  <li>
                    <Link href={"/rules"} className="hover-effect">
                      नियम और शर्तें
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div className="footer-widget">
                  <div className="row align-items-center">
                    {/* <div className="col-lg-4 pr-0">
                                                <img
                                                    src="ShowImage.jpg"
                                                    className="border rounded"
                                                    alt=""
                                                    style={{ width: 120, boxShadow: "rgba(11, 11, 19, 0.25) 8px 6px 2px 1px" }}
                                                />
                                            </div> */}
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <span
                            className="text-white"
                            style={{
                              textShadow: "rgb(21, 47, 130) 4px 4px",
                              fontWeight: 900,
                            }}
                          >
                            नाम
                          </span>
                        </li>
                        <li>
                          <span
                            className="text-white"
                            style={{
                              textShadow: "rgb(21, 47, 130) 4px 4px",
                              fontWeight: 900,
                            }}
                          >
                            डेजीनेशन
                          </span>
                        </li>
                        <li>
                          <span
                            className="text-white"
                            style={{
                              textShadow: "rgb(21, 47, 130) 4px 4px",
                              fontWeight: 900,
                            }}
                          >
                            {" "}
                            ईमेल आईडी{" "}
                          </span>
                        </li>
                        <li>
                          <span
                            className="text-white"
                            style={{
                              textShadow: "rgb(21, 47, 130) 4px 4px",
                              fontWeight: 900,
                            }}
                          >
                            मोबाइल नंबर
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="header__top-menu d-flex align-items-canter justify-content-between">
                  <Link
                    href="tel: 9999999999"
                    className="hover-effect flex-lg-shrink-0"
                  >
                    विज्ञापन के लिए संपर्क करें 👈
                  </Link>
                  <HitCounter />
                  <div
                    className="top box box-h hover-effect flex-lg-shrink-0"
                    onClick={toggleModal}
                  >
                    अपना सहयोग दें{" "}
                    <Image width={24} height={25} src={"/Donate.svg"} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Advert advert={props.advert} endpoint={"footer below"} />
      </footer>
      <div className="container p-0">
          <div className="copyright-area main ">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-6">
                <div className="copyright text-start">
                  <p
                    className="text-center"
                  >
                    © Third Eye World News Copyrights 2024. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Advert advert={props.advert} endpoint={"copyright upper"} />

      <Follow />
    </>
  );
};

export default Footer;
