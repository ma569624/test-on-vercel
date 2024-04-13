import { useEffect, useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import Image from "next/image";
const VotPoll = () => {
  const [data, setdata] = useState([]);
  const API = "https://new-backend-server-production.up.railway.app";
  const [advert, setAdvert] = useState([]);

  const getdata = async () => {
    const response = await fetch(`${API}/api/advert`);
    const advdata = await response.json();

    setAdvert(advdata);

    const resdata = await fetch(`${API}/api/poll`);
    const data = await resdata.json();
    setdata(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <section className="features-area">
      <div className="container p-lg-0">
        <div className="box">
          <div className="row">
            <div className="col-lg-3">
              <div className=" section-title">
                <div className="box-shodow tag">
                  <h2>
                    <MdDoubleArrow size={30} />
                    इस पर आपकी क्या राय है?
                  </h2>
                </div>
              </div>
              {data.map((item, key) => (
                <div key={key}>
                  <h4>{item.heading}</h4>
                  <form>
                    <table width="97%" border={0} cellSpacing={0}>
                      <tbody>
                        <tr valign="top">
                          <td colSpan={6}>
                            <div align="center" className="polltext">
                              <div align="left">
                                <input
                                  type="radio"
                                  name="option"
                                  style={{ border: "2px solid #000" }}
                                  id="radio"
                                  defaultValue={1}
                                />
                                <label
                                  className="ml-2"
                                  htmlFor="radio"
                                  style={{
                                    fontSize: "15px",
                                    fontWeight: 600,
                                    color: "red",
                                    textShadow: "rgb(21, 47, 130) 1px 1px",
                                  }}
                                >
                                  {" "}
                                  {item.option1}
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr valign="hrefp">
                          <td colSpan={6}>
                            <div align="left" className="polltext">
                              <input
                                type="radio"
                                name="option"
                                id="radio2"
                                defaultValue={2}
                              />
                              <label
                                className="ml-2"
                                htmlFor=""
                                style={{
                                  fontSize: "15px",
                                  fontWeight: 600,
                                  color: "red",
                                  textShadow: "rgb(21, 47, 130) 1px 1px",
                                }}
                              >
                                {item.option3}
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr valign="hrefp">
                          <td colSpan={6}>
                            <div align="left" className="polltext">
                              <input
                                type="radio"
                                name="option"
                                id="radio3"
                                defaultValue={3}
                              />
                              <label
                                className="ml-2"
                                htmlFor=""
                                style={{
                                  fontSize: "15px",
                                  fontWeight: 600,
                                  color: "red",
                                  textShadow: "rgb(21, 47, 130) 1px 1px",
                                }}
                              >
                                {item.option2}
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr valign="top">
                          <td colSpan={6}>
                            <div align="left" className="polltext mb-1">
                              <button className="bg-success submit">
                                Submit
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <buthrefn className="btn ">Submit</buthrefn> */}
                  </form>
                </div>
              ))}
            </div>

            <div className="col-lg-3">
              <div className="section-title">
                <div className="box-shodow tag">
                  <h2>
                    <MdDoubleArrow size={30} />
                    शेयर बाज़ार का ताज़ा ग्राफ
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="section-title">
                <div className="box-shodow tag">
                  <h2>
                    <MdDoubleArrow size={30} />
                    मौसम का हाल
                  </h2>
                </div>
              </div>
            </div>
            

            <div className="col-lg-3">
              <div className="section-title ">
              <div className="section-title">
                <div className="box-shodow tag">
                  <h2>
                    <MdDoubleArrow size={30} />
                    विज्ञापन
                  </h2>
                </div>
              </div>
                <Image
                  width={900}
                  height={236}
                  src="/ShowImage.gif"
                  alt="hero image"
                  style={{
                    borderRadius: "8px",
                    width: "100%",
                    height: 235,
                    filter: "drop-shadow(rgb(102, 102, 102) 4px 4px 1px )",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VotPoll;
