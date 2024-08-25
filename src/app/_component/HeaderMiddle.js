import React from "react";
import { useEffect, useRef, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const HeaderMiddle = (props) => {
  const API = props.API;
  const [tagline, setTagline] = useState([]);
  const [advert, setAdvert] = useState([]);
  const serverTimestamp = props.serverTimestamp;
  const [date, setDate] = useState(new Date(serverTimestamp));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setAdvert(props.advert);
    setTagline(props.tagline[0]);
  }, [props]);

  const formattedDate = date instanceof Date && !isNaN(date)
    ? date.toLocaleDateString("hi-IN", {
          weekday: "long",
          day: "numeric",
          month: "short",
          year: "numeric",
      })
    : "";

  return (
    <div className="header__middle_area">
      <div className="first">
        <Image
          className="ml-4"
          src="/thirdeyeworldnews logo.svg"
          alt="Header Logo"
          width={255}
          height={120}
        />
        <ul className="d-flex mt-1 mb-0 ml-1" style={{ gap: "10px" }}>
          <li style={{ color: "white" }}>
            <RxCalendar
              className="ml-1 mr-1"
              style={{
                fontWeight: 800,
                fontSize: "13px",
                color: "white",
              }}
            />
            <span style={{ fontSize: "13px", fontWeight: 800 }}>
              {formattedDate}
            </span>
          </li>
          <li>
            <MdAccessTime
              size={16}
              className="mr-1"
              style={{
                fontWeight: 900,
                color: "white",
              }}
            />
            <span
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: "13px",
              }}
            >
              {date instanceof Date && !isNaN(date) ?date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true,
              }) : ''}
            </span>
          </li>
        </ul>
      </div>
      <div className="second">
        <h4
          className="animate-charcter"
          style={{
            fontSize:
              tagline && tagline.Heading && tagline.Heading.length > 70
                ? "35px"
                : "52px",
                    "@media (max-width: 768px)": {
                  fontSize:
                  tagline && tagline.Heading && tagline.Heading.length > 70
                  ? "25px"
                  : "32px",
            },
          }}
        >
          {tagline && tagline.Heading}
        </h4>
      </div>
    </div>
  );
};

export default HeaderMiddle;
