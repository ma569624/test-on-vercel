"use client";

import ApradJagat from "./ApradJagat";
import { useContext, useEffect, useState } from "react";
import VotPoll from "./VotPoll";
import KhabreRajiyoki from "./KhabreRajiyoki";

import JaraIdhar from "./JaraIdhar";
import Link from "next/link";
import Model from "./model";
import Advert from "./Advert";
import Follow from "./follow";
import Image from "next/image";
import { MdAirplanemodeActive } from "react-icons/md";
import AppContext from "../_context/AppContext";

const Footer = (props) => {
  const [founder, setFounder] = useState({});
  const { setRajiya, showfooter } = useContext(AppContext);
  const API = process.env.NEXT_PUBLIC_BASE_URL;

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setRajiya(props.Rajiyablogs);
  }, [props]);
  useEffect(() => {
    const getfounderdetails = async () => {
      const res = await fetch(`${API}/api/founder`);
      const data = await res.json();

      setFounder(data[0]);
    };
    getfounderdetails();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Show button when user scrolls beyond a certain threshold (e.g., 100 pixels)
      setShowButton(scrollTop > 1200 && scrollTop !== 0);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <MdAirplanemodeActive size={30} />
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

      {showfooter && (
        <>
          <KhabreRajiyoki allblogs={props.Rajiyablogs} />
          <Advert advert={props.advert} endpoint={"upper vote poll"} />
          <VotPoll />
          <Advert advert={props.advert} endpoint={"footer upper"} />
          <footer>
            <div className="container p-0">
              <div className="footer_box">
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
                  <div className="col-xl-5">
                    <div className="footer_name_sec">
                      <div className="">
                        <div className="">
                          <div className="d-flex gap-3">
                            <Image
                              src={"/default_repoter.png"}
                              // src={
                              //   founder.EmployeeImage ? founder.EmployeeImage : ""
                              // }
                              className="repo-img"
                              width={87}
                              height={99}
                              alt="default_repoter"
                            />
                            <table className="">
                              <tbody>
                                <tr>
                                  <td>{founder.EmployeeName}</td>
                                </tr>
                                <tr>
                                  <td>{founder.EmployeeDesignation}</td>
                                </tr>
                                <tr>
                                  <td>{founder.EmailAddress}</td>
                                </tr>
                                <tr>
                                  <td>{founder.ContactNumber}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-12">
                    <div className="header__top-area">
                      <div className="hover-effect header__top-menu">
                        विज्ञापन के लिए संपर्क करें 👈
                      </div>

                      <div
                        className="header__top-menu model"
                        onClick={toggleModal}
                      >
                        <div>अपना सहयोग दें</div>
                        <Image
                          width={24}
                          height={25}
                          src={"/Donate.svg"}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Advert advert={props.advert} endpoint={"footer below"} />
          </footer>
          <div className="container p-lg-0">
            <div className="copyright-area main ">
              <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12 col-md-6">
                  <div className="copyright text-start">
                    <p className="text-center">
                      © Third Eye World News Copyrights 2024. All rights
                      reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Advert advert={props.advert} endpoint={"copyright upper"} />
        </>
      ) 
      }

      <Follow />
    </>
  );
};

export default Footer;
