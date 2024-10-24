"use client";

import BreakingNew from "./BreakingNew";
import TopKhaber from "./TopKhaber";
import Advert from "./Advert";
import { Nav } from "./Nav";
import FixedAdvert from "./FixedAdvert";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import { Container } from "react-bootstrap";

const Header = (props) => {
  const API = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      <header>
        <FixedAdvert
          advert={props?.advert}
          position={"left"}
          endpoint={"below breaking News"}
        />

        <Container className="px-lg-0" fluid>
          {props?.advert?.filter((item) =>
            item?.location?.includes("top of header")
          ).length > 0 && (
            <div className="row patti-margin-bottom">
              <div className="col-lg-12">
                <Advert advert={props?.advert} endpoint={"top of header"} />
              </div>
            </div>
          )}

          <div className="row patti-margin-bottom">
            <div className="col-lg-12">
              <HeaderTop />
            </div>
          </div>

          {props?.advert?.filter((item) => item?.location?.includes("below header"))
            .length > 0 && (
            <div className="row patti-margin-bottom">
              <div className="col-lg-12">
                <Advert advert={props?.advert} endpoint={"below header"} />
              </div>
            </div>
          )}

          <div className="row patti-margin-bottom">
            <div className="col-lg-12">
              <HeaderMiddle />
            </div>
          </div>

          {props?.advert?.filter((item) => item?.location?.includes("top menu"))
            .length > 0 && (
            <div className="row patti-margin-bottom">
              <div className="col-lg-12">
                <Advert advert={props?.advert} endpoint={"top menu"} />
              </div>
            </div>
          )}

          <div className="row patti-margin-bottom">
            <div className="col-lg-12">
              <Nav />
            </div>
          </div>

          {props?.advert?.filter((item) => item?.location?.includes("below menu"))
            .length > 0 && (
            <div className="row patti-margin-bottom">
              <div className="col-lg-12">
                <Advert advert={props?.advert} endpoint={"below menu"} />
              </div>
            </div>
          )}
        </Container>
        <FixedAdvert
          advert={props?.advert}
          position={"right"}
          endpoint={"right home"}
        />
      </header>
      <BreakingNew />
      <Advert advert={props?.advert} endpoint={"below breaking News"} />
      <TopKhaber />
      <Advert advert={props?.advert} endpoint={"below scroll news"} />
    </>
  );
};

export default Header;
