"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Model from "./model";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const HeaderTop = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="header__top-area">
        <div className="hover-effect header__top-menu">
          विज्ञापन के लिए संपर्क करें 👈
        </div>
        <div className="top header__top-menu">
          ख़ोजें <FaSearch />
        </div>
        <div className="header__top-menu model" onClick={toggleModal}>
          <div>अपना सहयोग दें</div>
          <Image width={24} height={25} src={"/Donate.svg"} alt="" />
        </div>

        <div className="header__top-menu">
          सब्सक्राइब करें <FaBell size={17} />
        </div>

      </div>
      <Model open={open} />
    </>
  );
};

export default HeaderTop;
