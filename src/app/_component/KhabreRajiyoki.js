import { useEffect, useState } from "react";
import News from "./News";
import MainNews from "./MainNews";
import SideNews from "./SideNews";
import { MdDoubleArrow } from "react-icons/md";

const KhabreRajiyoki = (props) => {
  const API = "https://new-backend-server-production.up.railway.app/api";
  const [data, setdata] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [id, setid] = useState("");
  const [category, setCategory] = useState([]);

  const getdata = async () => {
    const response = await fetch(`${API}/rajiya?Status=active`);
    const json = await response.json();
    setdata(json);
  };

  useEffect(() => {
    getdata();
    setdata(data);
  }, []);

  const NewsRow = ({ Rajiya }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const filteredData = props.allblogs.filter((item) =>
        item.Category.includes(Rajiya)
      );
      setData(filteredData);
      console.warn(data);
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
      console.warn(data);
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
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center text-Shadow box-shodow">
              <h2 className="main text-white m-0">
                <MdDoubleArrow size={50} className="mr-2" />
                ख़बरें राज्यों से
              </h2>
            </div>
          </div>
        </div>
        {data.map((item, key) => (
          <div className="row" key={key}>
            <div className="col-lg-9">
              <div className="home-patti-tittle">
                <img src={`${API}${item.Image1}`} alt="" />
                <MdDoubleArrow size={50} />
                <h2 className="title">{item.StateName}</h2>
              </div>
              <NewsRow Rajiya={item.StateName} />
            </div>
            <div className="col-lg-3">
              <div className="home-patti-side-tittle">
                <img src={`${API}${item.Image2}`} alt="" />
                <h2 className="title">{item.StateName}</h2>
              </div>
              <SideRow Rajiya={item.StateName} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KhabreRajiyoki;
