"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Model from "./model";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import SubscribersModel from "./SubscribersModel";
import SearchModel from "./SearchModel";
import AdvertiseModel from "./advertiseModel";
const HeaderTop = () => {
  const [open, setOpen] = useState(false);
  const [opensubscribermodel, setOpensubScriberModel] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openAdvert, setOpenAdvert] = useState(false);
  const OpenAdvertModel = () => {
    setOpenAdvert(!openAdvert);
  }
  const toggleModal = () => {
    setOpen(!open);
  };
  const openSubscribersModel = () => {
    setOpensubScriberModel(!opensubscribermodel);
  };
  
  const Search = () => {
    setOpenSearch(!openSearch);
  };
  return (
    <>
      <div className="header__top-area">
        <div
         onClick={OpenAdvertModel}
          // href="https://wa.link/anurkr"
          target="_blank"
          className="hover-effect header__top-menu"
        >
          विज्ञापन के लिए संपर्क करें 👈
        </div>
        <div className="top header__top-menu" onClick={Search}>
          ख़ोजें <FaSearch />
        </div>
        <div className="header__top-menu model" onClick={toggleModal}>
          <div>अपना सहयोग दें</div>
          <Image width={24} height={25} src={"/Donate.svg"} alt="" />
        </div>
        <div className="header__top-menu" onClick={openSubscribersModel}>
          सब्सक्राइब करें <FaBell size={17} />
        </div>
      </div>
      <Model open={open} />
      <SubscribersModel open={opensubscribermodel} />
      <SearchModel open={openSearch} />
      <AdvertiseModel open={openAdvert} />
      
    </>
  );
};

export default HeaderTop;
