"use client";

import BreakingNew from "./BreakingNew";
import TopKhaber from "./TopKhaber";
import Advert from "./Advert";
import { Nav } from "./Nav";
import FixedAdvert from "./FixedAdvert";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";

const Header = (props) => {
  const API = props.API;

  return (
    <>
      <header className="header">
        <FixedAdvert
          advert={props.advert}
          position={"left"}
          endpoint={"below breaking News"}
        />

        <div className="container p-0">
          <div className="row">
            <div className="col-lg-12">
              <Advert advert={props.advert} endpoint={"top of header"} />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <HeaderTop />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Advert advert={props.advert} endpoint={"below header"} />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <HeaderMiddle {...props} />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Advert advert={props.advert} endpoint={"top menu"} />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Nav {...props} />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Advert advert={props.advert} endpoint={"below menu"} />
            </div>
          </div>
        </div>
        <FixedAdvert
          advert={props.advert}
          position={"right"}
          endpoint={"right home"}
        />
      </header>
      <BreakingNew />
      <Advert advert={props.advert} endpoint={"below breaking News"} />
      <TopKhaber API={API} topKhabare={props.topKhabare} />
      <Advert advert={props.advert} endpoint={"below scroll news"} />
    </>
  );
};

export default Header;
