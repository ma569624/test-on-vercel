"use client";

import React, { useState } from "react";
import {
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa"; // Import required icons


import "./follow.scss";
import Link from "next/link";


function Follow() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [show, setShow] = useState(false);

  return (
    <div
      className={isOpen ? "share-button-wrap open-icon" : "share-button-wrap"}
    >
      <div className="share-button-wrap__center-icon">
        {show ? <span className="title-show">हमें फॉलो करें</span> : ""}

        <div
          className="share-button-wrap__share-icon"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(!show)}
          onClick={toggleIcon}
        >
          <i className="fa fa-share-alt">
            <FaShareAlt />
          </i>
        </div>

        <div className="share-button-wrap__social-icon-wrap">
          <ul>
            <li>
              
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100058813196394"
                  className="container1 facebook"
                >
                  <FaFacebookF size={18} />
                </Link>
              
            </li>

            <li>
              
                <a
                  target="_blank"
                  href="https://twitter.com/TEWN2009"
                  className="container1 google"
                >
                  <FaTwitter size={18} />
                </a>
              
            </li>

            <li>
              
                <a target="_blank" href="https://t.me/+tq7kyiSQp184ZTJl">
                  <FaTelegramPlane size={18} />
                </a>
              
            </li>

            <li>
              
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC4qhbs7b2TEy2_dmd2xxXzw"
                
                >
                  <FaYoutube size={18} />
                </a>
              
            </li>
            <li>
                <a
                  target="_blank"
                  href="https://whatsapp.com/channel/0029Va65zjQKbYMGyJFMnh0y"
                >
                  <FaWhatsapp size={18} />
                </a>
              
            </li>
            <li>
              
                <a target="_blank" href="https://www.instagram.com/thirdeyeworldnews?utm_source=qr&igsh=NWwxMmludTBsNGlr">
                  <FaInstagram size={18} />
                </a>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Follow;
