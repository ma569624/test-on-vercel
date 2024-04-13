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
        <div className="row">
          <div className="col-xl-12">
            <div className="header__menu f-left">
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
                                return blog.Category.includes(
                                  `${item.StateName}`
                                );
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
        </div>
      </div>
      {/* <div class="header__menu-area black-bg">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="header__right-icon f-right mt-17">
                <a href="#" data-toggle="modal" data-target="#search-modal">
                  <i class="fas fa-search"></i>
                </a>
                <a class="info-bar" href="javascript:void(0)">
                  <i class="fas fa-bars"></i>
                </a>
              </div>
              <div class="header__menu f-left">
                <div class="mean-push"></div>
                <nav id="mobile-menu" style={{display: 'none'}}>
                  <ul>
                    <li class="active">
                      <a href="#">Home</a>
                      <ul class="submenu">
                        <li>
                          <a href="index.html">Home Style 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Style 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Style 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home Style 4</a>
                        </li>
                        <li>
                          <a href="index-5..html">Home Style 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="politic.html">News</a>
                    </li>
                    <li>
                      <a href="tech.html">Tech</a>
                    </li>
                    <li>
                      <a href="lifestyle.html">Enterteinment</a>
                    </li>
                    <li>
                      <a href="lifestyle.html">Lifestyle</a>
                    </li>
                    <li>
                      <a href="blog-standard.html">Blog</a>
                      <ul class="submenu">
                        <li>
                          <a href="blog-3-column.html">BLog 3 Column</a>
                        </li>
                        <li>
                          <a href="blog-standard.html">BLog Sidebar</a>
                        </li>
                        <li>
                          <a href="post-details.html">BLog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="portfolio-full.html">Portfolio</a>
                      <ul class="submenu">
                        <li>
                          <a href="portfolio-box.html">Portfolio Box</a>
                        </li>
                        <li>
                          <a href="portfolio-full.html">Portfolio Box</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul class="submenu">
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="lifestyle.html">Lifestyle</a>
                        </li>
                        <li>
                          <a href="politic.html">Politic</a>
                        </li>
                        <li>
                          <a href="tech.html">Technology</a>
                        </li>
                        <li>
                          <a href="post-details.html">Post Details</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="mobile-menu mean-container">
                <div class="mean-bar">
                  <a
                    href="#nav"
                    class="meanmenu-reveal"
                    
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                  <nav class="mean-nav">
                    <ul style={{display: 'none'}}>
                      <li class="active">
                        <a href="#">Home</a>
                        
                      </li>
                      <li>
                        <a href="politic.html" className="text-white">News</a>
                      </li>
                      <li>
                        <a href="tech.html">Tech</a>
                      </li>
                      <li>
                        <a href="lifestyle.html">Enterteinment</a>
                      </li>
                      <li>
                        <a href="lifestyle.html">Lifestyle</a>
                      </li>
                      
                      <li>
                        <a href="portfolio-full.html">Portfolio</a>
                        <ul class="submenu">
                          <li>
                            <a href="portfolio-box.html">Portfolio Box</a>
                          </li>
                          <li>
                            <a href="portfolio-full.html">Portfolio Box</a>
                          </li>
                        </ul>
                        <a class="mean-expand" href="#" >
                          +
                        </a>
                      </li>
                      
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
