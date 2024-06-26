"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdDoubleArrow } from "react-icons/md";
import Image from "next/image";
import AppContext from "../_context/AppContext";

import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
const Page = () => {
  // const [Rajiya, setRajiya] = useState([]);
  // const { Rajiya } = useContext(AppContext);

  const [Rajiya, setRajiya] = useState([]);
  const newdata = Rajiya;
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_BASE_URL;
  console.warn(newdata);
  const fetchMoreData = async () => {
    try {
      const response = await fetch(`${API}/api/headerblogs?name=state`);
      const data = await response.json();

      setRajiya(data.data);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching all blogs:", error);
    } finally {
      // setLoading(false); // Set loading state to false after fetch operation completes
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  const MAX_WORDS = 16;

  function sliceByWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [showitem, setShowitems] = useState(0);

  const limit = 10;

  const handleClick = (id) => {
    console.warn(id);
    router.push(`/Top/${id}`);
  };
  console.warn(Rajiya)

  const NewsRow = ({ Rajiya, totalpage }) => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   console.warn(Rajiya);
    //   let filter = blogs.filter((item) => item.Category.includes(Rajiya));
    //   setData(filter);
    //   console.warn(filter);
    // }, [Rajiya]);

    const nextPage = () => {
      setCurrentPage(currentPage + 1);
      // if (showitem > 4) {
      setShowitems(showitem + 4);
      // }
    };

    const prevPage = () => {
      setCurrentPage(currentPage - 1);
      if (showitem > 4) {
        setShowitems(showitem - 4);
      }
    };

    return (
      <>
        <div className="row ">
          <div className="col-lg-12">
            <div className="section-title mt-2">
              <div className="container">
                <div className="row rajiya">
                  {Rajiya &&
                    Rajiya.slice(showitem, showitem + 4).map((item, key) => (
                      <div className="col-lg-3" key={key}>
                        <div className="postbox mb-25">
                          <div className="postbox__thumb image-container">
                            <Image
                              width={800}
                              height={300}
                              src={
                                item.Image !== undefined
                                  ? `${API}${item.Image}`
                                  : "/default.jpg"
                              }
                              style={{
                                width: 722,
                                height: 200,
                                filter:
                                  "drop-shadow(rgb(102, 102, 102) 4px 4px 1px )",
                              }}
                              alt="hero image"
                            />
                          </div>
                          <div className="postbox__text mt-4">
                            <h4
                              className="title-18 pr-0"
                              onClick={() => handleClick(item.order)}
                            >
                              {item.Heading &&
                                sliceByWords(item.Heading, MAX_WORDS)}
                            </h4>

                            {item.Matter && (
                              <h4 className="title-16 pr-0">
                                <div>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: item.Matter.slice(0, 140),
                                    }}
                                  />
                                </div>
                              </h4>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-3 mx-auto">
                <h6 className="total-count text-center fs-6 bg-danger p-2 rounded-5 fw-bold text-white shadow">
                  इस सेक्शन की कुल खबरें: {totalpage}
                </h6>
              </div>
            </div>
            <div className="pagination text-center justify-content-center">
              <ul>
                <li>
                  <a
                    className="hover-effect me-4"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    <TbPlayerTrackPrevFilled className="me-2 pb-1" size={25} />
                    पिछली ख़बर
                  </a>
                </li>

                <li>
                  <a className="hover-effect" onClick={nextPage}>
                    अगली ख़बर{" "}
                    <TbPlayerTrackNextFilled size={25} className="ms-2 pb-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <section className=" pt-2 pb-2 rajiya-post">
        <div className="container p-lg-0">
          <div className="row">
            <div className="col-lg-12">
              <div className=" main-sec mb-3 ">
                <h2 className="m-0 p-0">
                  <MdDoubleArrow size={50} className="me-2" />
                  ख़बरें राज्यों से
                  <MdDoubleArrow
                    size={50}
                    style={{ transform: "rotate(180deg)" }}
                    className="ms-2"
                  />
                </h2>
              </div>
            </div>
          </div>
        </div>
        {Rajiya &&
          Rajiya.map((item, key) => (
            <div className="container p-lg-0 pb-5" key={key}>
              <div className="row ">
                <div className="col-lg-12">
                  <div className="sec ">
                    <Image
                      width={100}
                      height={100}
                      className="me-4 ml-1"
                      src={
                        item.section.categorylogo !== undefined
                          ? `${API}${item.section.categorylogo}`
                          : ""
                      }
                      alt=""
                    />
                    <h2 className="m-0 ">
                      {/* {data[0].Heading} */}
                      <MdDoubleArrow size={50} className="mr-2" />
                      {item.section.category}
                    </h2>
                  </div>
                </div>
              </div>
              <NewsRow Rajiya={item.data} totalpage={item.totalnews} />
            </div>
          ))}
      </section>
    </>
  );
};

export default Page;
