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

    setdata(json); // Set the initial data
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
      <div className="row row-10">
        <div className="col-40 pr-0">
          <div className="section-title">
            <div className="row ">
              <div className="col-lg-6" style={{ paddingRight: 0 }}>
                {data.length > 0 ? (
                  <MainNews API={API} data={data[0]} category={Rajiya} />
                ) : (
                  <></>
                )}
              </div>
              <div className="col-lg-6 pl-10 pr-0">
                <div
                  className="d-flex flex-wrap gap-3"
                  style={{ gap: ".5rem" }}
                >
                  {data.length > 1 ? (
                    <News API={API} data={data[1]} category={Rajiya} />
                  ) : (
                    <></>
                  )}
                  {data.length > 2 ? (
                    <News API={API} data={data[2]} category={Rajiya} />
                  ) : (
                    <></>
                  )}
                  {data.length > 3 ? (
                    <News API={API} data={data[3]} category={Rajiya} />
                  ) : (
                    <></>
                  )}
                  {data.length > 4 ? (
                    <News API={API} data={data[4]} category={Rajiya} />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-20 ">
          {data.length > 5 ? (
            <SideNews API={API} data={data[5]} category={Rajiya} />
          ) : (
            <></>
          )}
          {data.length > 6 ? (
            <SideNews API={API} data={data[6]} category={Rajiya} />
          ) : (
            <></>
          )}
          {data.length > 7 ? (
            <SideNews API={API} data={data[7]} category={Rajiya} />
          ) : (
            <></>
          )}
          {data.length > 8 ? (
            <SideNews API={API} data={data[8]} category={Rajiya} />
          ) : (
            <></>
          )}
          {data.length > 9 ? (
            <SideNews API={API} data={data[9]} category={Rajiya} />
          ) : (
            <></>
          )}
          {data.length > 10 ? (
            <SideNews API={API} data={data[10]} category={Rajiya} />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <section className="news-area pt-1 ">
        {/* trendy news */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center text-Shadow box-shodow">
                <h2
                  className="main"
                  style={{
                    color: "white",
                    // padding: 10,
                    borderRadius: "18px",
                    fontSize: "24px",
                  }}
                >
                  <MdDoubleArrow size={50} className="mr-2" />
                  ख़बरें राज्यों से
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* trendy news end */}
      </section>

      <section className="news-area ">
        {data.slice(0, 5).map((item, key) => (
          
            <div className="container" key={key}>
              <div className="row row-10">
                <div className="col-40 pr-0">
                  <div
                    className="section-title d-flex align-items-center mb-1 text-Shadow box-shodow"
                    style={{
                      backgroundColor: "#a01f1f",
                      color: "white",
                      // padding: 13,
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "8px",
                        width: "80px",
                        height: "50px",
                        marginRight: "2px",
                        padding: "2px",
                        filter: "drop-shadow(rgb(132, 85, 99) 4px 3px 1px)",
                      }}
                      className="ml-1"
                      src={`${API}${item.Image1}`}
                      alt=""
                    />
                    <MdDoubleArrow size={50} className="mr-2" />
                    <h2
                      style={{
                        color: "white",
                        textShadow: "rgb(21, 47, 130) 4px 4px",
                      }}
                    >
                      {item.StateName}
                    </h2>
                  </div>
                </div>

                <div className="col-20 ">
                  <div
                    className="section-title d-flex align-items-center mb-1 text-Shadow box-shodow"
                    style={{
                      backgroundColor: "#a01f1f",
                      color: "white",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      style={{
                        borderRadius: "8px",
                        width: "71px",
                        height: "50px",
                        marginRight: "2px",
                        padding: "2px",
                        filter: "drop-shadow(rgb(132, 85, 99) 4px 3px 1px)",
                      }}
                      className="ml-1"
                      src={`${API}${item.Image2}`}
                      alt=""
                    />
                    <h2
                      style={{
                        padding: 8,
                        margin: 0,
                        fontSize: 18,
                        color: "white",
                      }}
                    >
                      {item.FirstLink}
                    </h2>
                  </div>
                </div>
              </div>
              <NewsRow Rajiya={item.StateName} />
            </div>
        ))}
      </section>
    </>
  );
};

export default KhabreRajiyoki;
