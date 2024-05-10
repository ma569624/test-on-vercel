"use client";

import BreakingNew from "./BreakingNew";
import TopKhaber from "./TopKhaber";
import Advert from "./Advert";
import { Nav } from "./Nav";
import FixedAdvert from "./FixedAdvert";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import { Container } from "react-bootstrap";
import { useContext, useEffect } from "react";
import AppContext from "../_context/AppContext";

const Header = (props) => {
  // const API = props.API;
  const API = process.env.NEXT_PUBLIC_BASE_URL;

  const {
    setTopKhabare,
    setToplinks,
    setBadikhabar,
    setTodayNews,
    idharbhi, 
    setIdharbhi,
    Rajiya,
    setRajiya,
    setAllBlogs,
  } = useContext(AppContext);

  // async function fetchAllBlogs() {
  //   try {
  //     const allblogs = await fetch(
  //       `${API}/api/allblogs?name=block`
  //     );

  //     return await allblogs.json();

  //   } catch (error) {
  //     console.error("Error fetching all blogs:", error);
  //     throw error;
  //   }
  // }

  // async function fetchRajiyablogs() {
  //   try {
  //     const Rajiyablogs = await fetch(
  //       `${API}/api/allblogs?name=rajiya`
  //     );
  //     return await Rajiyablogs.json();
  //   } catch (error) {
  //     console.error("Error fetching Rajiyablogs:", error);
  //     throw error;
  //   }
  // }
  console.warn(props.Rajiyablogs)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const allBlogsResponse = await fetch(`${API}/api/allblogs?name=block`);
        // const rajiyablogsResponse = await fetch(`${API}/api/allblogs?name=state`);
        // const allBlogsData = await allBlogsResponse.json();
        // const rajiyablogsData = await rajiyablogsResponse.json();
        // console.warn(allBlogsData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.warn(props.todaynews)
    setIdharbhi(props.idharbhi)
    setAllBlogs(props.allblogs);
    setTopKhabare(props.topKhabare);
    setToplinks(props.toplinks);
    setRajiya(props.Rajiyablogs)
    setBadikhabar(props.badikhabar);
    setTodayNews(props.todaynews);
    
    fetchData();
    
  }, [props]);
  console.warn(props.todaynews)


  return (
    <>
      <header>
        <FixedAdvert
          advert={props.advert}
          position={"left"}
          endpoint={"below breaking News"}
        />

        <Container className="px-lg-0" fluid>
          {props.advert.filter((item) =>
            item.location.includes("top of header")
          ).length > 0 && (
            <div className="row patti-margin-bottom">
              <div className="col-lg-12">
                <Advert advert={props.advert} endpoint={"top of header"} />
              </div>
            </div>
          )}

          <div className="row patti-margin-bottom">
            <div className="col-lg-12">
              <HeaderTop />
            </div>
          </div>

          {props.advert.filter((item) => item.location.includes("below header"))
            .length > 0 && (
            <div className="row patti-margin-bottom">
              <div className="col-lg-12">
                <Advert advert={props.advert} endpoint={"below header"} />
              </div>
            </div>
          )}

          <div className="row patti-margin-bottom">
            <div className="col-lg-12">
              <HeaderMiddle {...props} />
            </div>
          </div>

          {props.advert.filter((item) => item.location.includes("top menu"))
            .length > 0 && (
            <div className="row patti-margin-bottom">
              <div className="col-lg-12">
                <Advert advert={props.advert} endpoint={"top menu"} />
              </div>
            </div>
          )}

          <div className="row patti-margin-bottom">
            <div className="col-lg-12">
              <Nav {...props} />
            </div>
          </div>

          {props.advert.filter((item) => item.location.includes("below menu"))
            .length > 0 && (
            <div className="row patti-margin-bottom">
              <div className="col-lg-12">
                <Advert advert={props.advert} endpoint={"below menu"} />
              </div>
            </div>
          )}
        </Container>
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
