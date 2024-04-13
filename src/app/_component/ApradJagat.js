'use client'

import { useEffect, useState } from "react";
import MainNews from "./MainNews";
import News from "./News";
import SideNews from "./SideNews";
import { MdDoubleArrow } from "react-icons/md";
import Image from "next/image";

const ApradJagat = (props) => {
  const API = "https://new-backend-server-production.up.railway.app";
  const [data, setdata] = useState([]);
  const getdata = async () => {
    const response = await fetch(`${API}/api/blogdisplay?Status=active`);
    const data = await response.json();
    setdata(data);
  };

  useEffect(() => {
    getdata();
    setdata(data);
  }, [props]);

  const NewsRow = ({ Rajiya }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const filteredData = props.allblogs.filter((item) =>
        item.Category.includes(Rajiya)
      );
      setData(filteredData);
    }, [Rajiya]);

    return (
      <div className="row">
        <div className="col-lg-6">
          {data.length > 0 ? (
            <MainNews API={API} data={data[0]} category={Rajiya} />
          ) : (
            <></>
          )}
        </div>
        <div className="col-lg-6">
          <div className="row">
            {data.slice(1, 5).map((item, key) => {
              return <News API={API} data={item} category={Rajiya} key={key} />;
            })}
          </div>
        </div>
      </div>
    );
  };
  const SideRow = ({ Rajiya }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const filteredData = props.allblogs.filter((item) =>
        item.Category.includes(Rajiya)
      );
      setData(filteredData);
    }, [Rajiya]);

    return (
      <>
        {data.slice(5, 10).map((item, key) => {
          return <SideNews API={API} data={item} category={Rajiya} key={key} />;
        })}
      </>
    );
  };

  return (
    <section className="news-area">
      <div className="container p-0">
        {data.map((item, key) => (
          
            <div className="row" key={key}>
              <div className="col-lg-9">
                <div className="home-patti-tittle">
                  <Image width={200} height={200} src={`${API}${item.Image1}`} alt="" />
                  <MdDoubleArrow size={50} />
                  <h2 className="title">{item.SectionName}</h2>
                </div>
                <NewsRow Rajiya={item.SectionName} />   
              </div>
              <div className="col-lg-3">
                <div className="home-patti-side-tittle">
                  <Image width={200} height={200} src={`${API}${item.Image2}`} alt="" />
                  <h2 className="title">{item.SecondSection}</h2>
                </div>
                <SideRow Rajiya={item.SectionName} />
              </div>
            </div>
          
        ))}
      </div>
    </section>
  );
};

export default ApradJagat;
