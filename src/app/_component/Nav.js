"use client";
import React, { use } from "react";
import { IoHome } from "react-icons/io5";
import { Scrollbars } from "react-custom-scrollbars-2";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import AppContext from "../_context/AppContext";

export const Nav = (props) => {
  const {Rajiya, AllBlogs} = useContext(AppContext)
  const API = props.API;
  const [blogs, setBlogs] = useState([]);
  const [data, setdata] = useState([]);
  const [rajiya, setRajiya] = useState([]);
 console.warn(AllBlogs)
 console.warn(props.Rajiyablogs)
  useEffect(() => {
    setdata(AllBlogs && AllBlogs.filter((item) => item.section.isHeader === true));
    setRajiya(props.Rajiyablogs);
  }, [Rajiya, AllBlogs, props]);

  const router = useRouter();

  // Function to handle link click
  const handleClick = (id) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(`/Top/${id}`, { scroll: true });
  };

  return (
    <>
      <div className="header__menu_area box-shodow">
        <div className="header__menu">
          <nav id="mobile-menu">
            <ul>
              <li>
                <Link
                  href="/"
                  data-title="होम पेज पर आएं"
                  style={{
                    marginRight: "24px",
                    fontWeight: "bold",
                  }}
                >
                  <IoHome
                    style={{
                      color: "yellow",
                      fontWeight: 900,
                      filter: "drop-shadow(rgb(102, 102, 102) 3px 2px 1px)",
                      fontSize: "15px",
                    }}
                    size={38}
                  />
                </Link>
              </li>

              {data && data.map((item, key) => (
                <li key={key}>
                  <Link className="hover-effect" href={`/Top/${item.data[0].order}`}>
                    {item.section.category}
                    <IoMdArrowDropdown size={30} />
                  </Link>
                  
                  <ul className="submenu">
                    <Scrollbars
                      style={{
                        width: "auto",
                        height: 400,
                        backgroundColor: "rgb(14 197 5)",
                        margin: 8,
                      }}
                    >
                      {item.data.map((filteredBlog, key) => (
                        <li key={key}>
                          <div
                            className="d-grid align-items-center justify-content-around p-2"
                            style={{
                              backgroundColor: "#ddd !impotant",
                            }}
                          >
                            <Image
                              width={190}
                              height={110}
                              // src={
                              //   filteredBlog.Image &&
                              //   `${API}${filteredBlog.Image}`
                              // }
                              src={
                                filteredBlog.Image !== "undefined" &&
                                filteredBlog.Image !== undefined
                                  ? `${API}${filteredBlog.Image}`
                                  : "/default.jpg"
                              }
                              className=""
                              style={{
                                width: 190,
                                height: 110,
                              }}
                              alt=""
                            />
                            <h4
                              className="text-white m-0 mt-2"
                              style={{
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "22px",
                              }}
                              onClick={() => handleClick(filteredBlog.order)}
                            >
                              {filteredBlog.Heading}
                            </h4>{" "}
                          </div>
                        </li>
                      ))}
                    </Scrollbars>
                  </ul>
                </li>
              ))}
              <li>
                <Link href={`/rajiya`} className="hover-effect">
                  ख़बरें राज्यों से
                  <IoMdArrowDropdown size={30} />
                </Link>
                  <ul className="submenu">
                    <Scrollbars
                      style={{
                        width: "auto",
                        height: 400,
                        backgroundColor: "rgb(14 197 5)",
                        overflow: "hidden !important"
                      }}
                    >
                      {rajiya && rajiya.map((item, key) => (
                        <div key={key}>
                          <h6 className="mb-0 mt-2 fw-bold text-center bg-danger py-2" >{item.section.category}</h6>
                          {item.data.slice(0, 2).map((filteredBlog, key) => (
                            <li key={key}>
                              <div
                                className="d-grid align-items-center justify-content-around p-2"
                                style={{
                                  backgroundColor: "#ddd !impotant",
                                }}
                              >
                                <Image
                                  width={190}
                                  height={110}
                                  // src={
                                  //   filteredBlog.Image &&
                                  //   `${API}${filteredBlog.Image}`
                                  // }
                                  src={
                                    filteredBlog.Image !== "undefined" &&
                                    filteredBlog.Image !== undefined
                                      ? `${API}${filteredBlog.Image}`
                                      : "/default.jpg"
                                  }
                                  className=""
                                  style={{
                                    width: 190,
                                    height: 110,
                                  }}
                                  alt=""
                                />
                                <h4
                                  className="text-white m-0 mt-2"
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "22px",
                                  }}
                                  onClick={() => handleClick(filteredBlog.order)}
                                >
                                  {filteredBlog.Heading}
                                </h4>{" "}
                              </div>
                            </li>
                          ))}
                        </div>
                      ))}
                    </Scrollbars>
                  </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
