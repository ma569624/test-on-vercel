import React from "react";
import { useEffect, useRef, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import Image from "next/image";

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

  return (
    <div
      className="header__middle main box-shodow"
      style={{ borderRadius: "8px" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="header__logo text-center ">
            <Image className="ml-4" src="/thirdeyeworldnews logo.svg" alt="Header Logo" width={255} height={120} />
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
                  {date.toLocaleDateString("hi-IN", {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
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
                  {date.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true,
                  })}
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-fill">
            <div
              className="header__add text-center"
              style={{ paddingBottom: 2 }}
            >
              <h4 className="animate-charcter">{tagline.Heading}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
