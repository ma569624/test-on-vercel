import React from "react";
import { useEffect, useRef, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";

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
  }, []);

  return (
    <div
      className="header__middle pt-1 main box-shodow"
      style={{ borderRadius: "8px" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="header__logo text-center">
            <img src="logo.png" alt="Header Logo" width={155} height={50} />
            <ul className="d-flex mt-1" style={{ gap: "10px" }}>
              <li style={{ color: "white" }}>
                <RxCalendar
                  className="ml-1 mr-1"
                  style={{
                    fontWeight: 600,
                    fontSize: "13px",
                    color: "white",
                  }}
                />
                <span style={{ fontSize: "13px", fontWeight: 600 }}>
                  {date.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </li>
              <li>
                <MdAccessTime
                  size={15}
                  className="mr-1"
                  style={{
                    fontSize: "13px",
                    fontWeight: 900,
                    color: "white",
                  }}
                />
                <span
                  style={{
                    color: "white",
                    fontWeight: 600,
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
