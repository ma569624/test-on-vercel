"use client";
import React, { use } from "react";
import { IoHome } from "react-icons/io5";
import { Scrollbars } from "react-custom-scrollbars-2";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const Nav = (props) => {
  const API = props.API;
  const [blogs, setBlogs] = useState([]);
  const [data, setdata] = useState([]);
  const [rajiya, setRajiya] = useState([]);

  useEffect(() => {
    setBlogs(props.data.data);
    setdata(props.blogdisplay.filter((item) => item.isHeader === true));
    setRajiya(props.rajiya);
  }, [props]);
  const MAX_WORDS = 16;

  function sliceByWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }

  return (
    <>
      <div className="header__menu-area box-shodow">
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
                      filter: "drop-shadow(rgb(102, 102, 102) 6px 5px 1px)",
                      fontSize: "15px",
                    }}
                    size={38}
                  />
                </Link>
              </li>

              {data.map((item, key) => (
                <li key={key}>
                  <a
                    className="hover-effect"
                    style={{
                      color: "white",
                      fontWeight: "900",
                      fontSize: "15px",
                    }}
                  >
                    {item.SectionName}
                    <IoMdArrowDropdown size={30} />
                  </a>
                  <ul className="submenu">
                    <Scrollbars
                      style={{
                        width: "auto",
                        height: 400,
                        backgroundColor: "rgb(14 197 5)",
                        margin: 8,
                      }}
                    >
                      {blogs
                        .filter((blog) => {
                          if (Array.isArray(blog.Category)) {
                            return blog.Category.includes(
                              `${item.SectionName}`
                            );
                          } else {
                            return blog.Category === `${item.SectionName}`;
                          }
                        })
                        .slice(0, 5)
                        .map((filteredBlog, key) => (
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
                                src={
                                  filteredBlog.Image &&
                                  `${API}${filteredBlog.Image}`
                                }
                                className=""
                                style={{
                                  width: 190,
                                  height: 110,
                                }}
                                alt=""
                              />{" "}
                              {/* Assuming the blog object has an 'image' property */}
                              <h4
                                className="text-white m-0 mt-2"
                                style={{
                                  fontSize: "14px",
                                  fontWeight: 600,
                                  lineHeight: "22px",
                                }}
                              >
                                {filteredBlog.Heading}
                              </h4>{" "}
                              {/* Assuming the blog object has a 'name' property */}
                            </div>
                          </li>
                        ))}
                    </Scrollbars>
                  </ul>
                </li>
              ))}
              <li>
                <a
                  href={`/rajiya`}
                  className="hover-effect"
                  style={{ color: "white", fontWeight: "900" }}
                >
                  ख़बरें राज्यों से
                  <IoMdArrowDropdown size={30} />
                </a>
                {rajiya.map((item, key) => (
                  <ul className="submenu" key={key}>
                    <Scrollbars
                      style={{
                        width: "auto",
                        height: 400,
                        backgroundColor: "rgb(14 197 5)",
                      }}
                    >
                      {blogs
                        .filter((blog) => {
                          // Check if Category is an array
                          if (Array.isArray(blog.Category)) {
                            // Check if the specified category is included in the Category array
                            return blog.Category.includes(`${item.StateName}`);
                          } else {
                            // Otherwise, directly compare with the Category value
                            return blog.Category === `${item.StateName}`;
                          }
                        })
                        .map((filteredBlog, key) => (
                          <li key={key}>
                            <a
                              href={`inner/${filteredBlog._id}/${item.StateName}`}
                            >
                              <div className="d-grid align-items-center justify-content-around p-2">
                                <Image
                                  width={180}
                                  height={110}
                                  src={
                                    filteredBlog.Image &&
                                    `${API}${filteredBlog.Image}`
                                  }
                                  className=""
                                  style={{
                                    width: 180,
                                    height: 110,
                                  }}
                                  alt=""
                                />{" "}
                                {/* Assuming the blog object has an 'image' property */}
                                <h3
                                  className="text-white m-0  text-center"
                                  style={{
                                    textDecoration: "underline",
                                    fontSize: "16px",
                                    fontWeight: 800,
                                  }}
                                >
                                  {item.StateName.slice()}
                                </h3>{" "}
                                {/* Assuming the blog object has a 'name' property */}
                                <h4
                                  className="text-white m-0 "
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "22px",
                                  }}
                                >
                                  {filteredBlog.Heading.slice()}
                                </h4>{" "}
                                {/* Assuming the blog object has a 'name' property */}
                              </div>
                            </a>
                          </li>
                        ))}
                    </Scrollbars>
                  </ul>
                ))}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
    </>
  );
};
