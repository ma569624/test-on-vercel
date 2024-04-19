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
    setdata(props.allblogs.filter((item) => item.section.isHeader === true));
    setRajiya(props.Rajiyablogs);
  }, [props]);
  

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

              {data.map((item, key) => (
                <li key={key}>
                  <a className="hover-effect">
                   
                    {item.section.SectionName}
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
                                src={filteredBlog.Image !== 'undefined' ? `${API}${filteredBlog.Image}` : ''}
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
                <a href={`/rajiya`}className="hover-effect">
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
                      <li>{item.data.map((item) => <>item</>)}</li>
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
