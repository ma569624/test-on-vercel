import { useEffect, useState } from "react";
import Api from "../Api/Api";
// import { a } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import Weather from "./weather";


const VotPoll = ({ color }) => {
    const [data, setdata] = useState([])
    const API = 'http://localhost:5000';
    const [advert, setAdvert] = useState([])

    const getdata = () => {
        Api('advert').then((response) => {
            setAdvert(response);
        })
            .catch((error) => {
                // Handle error
            });

        Api('poll').then((response) => {
            setdata(response);

        })
            .catch((error) => {
                // Handle error
            });

    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <section className="features-area ">
            <div className="container">
                <div className="content-pad border pb-0" style={{ background: 'rgb(202 249 177)', boxShadow: 'rgba(255, 0, 0, 0.53) 0px 2px 2px 1px', borderRadius: '8px' }}>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="section-title mb-2">
                                <div className="box-shodow" style={{ display: 'flex', backgroundColor: 'rgb(6, 115, 196)', borderRadius: '8px', padding: 5, }}>

                                    <h2 className="p-0 m-0" style={{ textShadow: 'rgb(21, 47, 130) 4px 4px', color: 'white', fontSize: '18px', }}>
                                        <MdDoubleArrow size={30} />
                                        इस पर आपकी क्या राय है?
                                    </h2>
                                </div>

                            </div>
                            {
                                data.map((item) => (
                                    <>
                                        <h4 style={{ fontWeight: 600, color: 'red', textShadow: 'rgb(21, 47, 130) 1px 1px', }}>
                                            {item.heading}
                                        </h4>
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
                                                                        style={{ border: '2px solid #000' }}
                                                                        id="radio"
                                                                        defaultValue={1}
                                                                    />
                                                                    <label className="ml-2" htmlFor="radio" style={{ fontSize: '15px', fontWeight: 600, color: 'red', textShadow: 'rgb(21, 47, 130) 1px 1px', }}> {item.option1}</label>
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
                                                                <label className="ml-2" htmlFor="" style={{ fontSize: '15px', fontWeight: 600, color: 'red', textShadow: 'rgb(21, 47, 130) 1px 1px', }}>{item.option3}</label>
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
                                                                <label className="ml-2" htmlFor="" style={{ fontSize: '15px', fontWeight: 600, color: 'red', textShadow: 'rgb(21, 47, 130) 1px 1px', }}>{item.option2}</label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr valign="top">
                                                        <td colSpan={6}>
                                                            <div align="left" className="polltext mb-1">
                                                                <button className="bg-success submit">Submit</button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            {/* <buthrefn className="btn ">Submit</buthrefn> */}
                                        </form>
                                    </>
                                ))
                            }
                        </div>

                        <div className="col-lg-3" >
                            <div className="section-title mb-30">
                                <div className="box-shodow" style={{ display: 'flex', backgroundColor: 'rgb(6, 115, 196)', borderRadius: '8px', padding: 5,  }}>

                                    <h2 className="p-0 m-0" style={{ textShadow: 'rgb(21, 47, 130) 4px 4px', color: 'white', fontSize: '18px', }}>
                                        <MdDoubleArrow size={30} />
                                        शेयर बाज़ार का ताज़ा ग्राफ
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="section-title mb-30">
                                <div className="box-shodow mb-4" style={{ display: 'flex', backgroundColor: 'rgb(6, 115, 196)', borderRadius: '8px', padding: 5, }}>
                                    <MdDoubleArrow size={30} style={{ color: 'white' }} />
                                    <h2 className="p-0 m-0 p-0 flex-fill text-center mt-2" style={{ textShadow: 'rgb(21, 47, 130) 3px 2px', color: 'white', fontSize: '18px', marginLeft: '-20px !important' }}>
                                        मौसम का हाल
                                    </h2>
                                </div>
                                {/* <Weather /> */}
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="section-title ">
                                <div className="box-shodow" style={{marginBottom: 4, display: 'flex', backgroundColor: 'rgb(6, 115, 196)', borderRadius: '8px', padding: 4, }}>
                                    <MdDoubleArrow size={30} style={{ color: 'white' }} />
                                    <h2 className="p-0 flex-fill text-center mt-2" style={{ textShadow: 'rgb(21, 47, 130) 3px 2px', color: 'white', fontSize: '18px', marginLeft: '-20px !important' }}>
                                        विज्ञापन
                                    </h2>
                                </div>

                                <img
                                    src="ShowImage.gif"
                                    alt="hero image"
                                    style={{ borderRadius: '8px',width: '100%', height: 235, filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )' }}
                                />
                                {/* {
                                    advert.filter(item => item.location.includes('side mousam news')).slice(0, 1).map((item) => (
                                        <a target='_blank' href={item.url ? item.url : `${API}${item.Image2}`}><img style={{ width: '500px', height: '200px' }} src={`${API}${item.Image1}`} alt="" /></a>

                                    ))
                                } */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default VotPoll;