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
    <div className="header__top-area">
      <div className="box-shodow top-header-bg main p-1">
        <div className="header__top-menu">
          <Link href="tel: 9999999999" className="hover-effect">
            विज्ञापन के लिए संपर्क करें 👈
          </Link>

          <div className="top box box-h hover-effect" onClick={toggleModal}>
            अपना सहयोग दें
            <Image width={24} height={25} src={"/Donate.svg"} alt="" />
          </div>
          <Model open={open} />

          <Link className="hover-effect" href="tel: 9999999999">
            सब्सक्राइब करें <FaBell size={17} />
          </Link>

          <div className="top hover-effect">
            ख़ोजें <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
