import { useEffect, useState } from 'react';
import MainNews from './MainNews';
import News from './News';
import SideNews from './SideNews';
import Link from 'next/link';
import { MdDoubleArrow } from "react-icons/md";
import Image from  'next/image';
import { RiArrowRightSLine } from "react-icons/ri";

const ApradJagat = (props) => {
  const API = 'https://new-backend-server-production.up.railway.app'
  const [data, setdata] = useState([])
  const getdata = async () => {
    const response = await fetch(`${API}/api/blogdisplay?Status=active`);
    const data = await response.json();
      setdata(data)
  }

  useEffect(() => {
    getdata();
    setdata(data)

  }, [])

  const NewsRow = ({ Rajiya }) => {

    const [data, setData] = useState([])
    useEffect(() => {
      const filteredData = props.allblogs.filter(item => item.Category.includes(Rajiya));
      setData(filteredData);
      console.warn(data)
    }, [Rajiya])


    return (
      <div className="row row-10">
        <div className="col-40 pr-0">
          <div className="section-title">

            <div className="row ">
              <div className="col-lg-6" style={{ paddingRight: 0 }}>
                {
                  data.length > 0 ? <MainNews API={API} data={data[0]} category={Rajiya} /> : <></>
                }
              </div>
              <div className="col-lg-6 pl-10 pr-0">
                <div className="d-flex flex-wrap gap-3" style={{ gap: '.5rem' }}>
                  {
                    data.length > 1 ? <News API={API} data={data[1]} category={Rajiya} /> : <></>
                  }
                  {
                    data.length > 2 ? <News API={API} data={data[2]} category={Rajiya} /> : <></>
                  }{
                    data.length > 3 ? <News API={API} data={data[3]} category={Rajiya} /> : <></>
                  }{
                    data.length > 4 ? <News API={API} data={data[4]} category={Rajiya} /> : <></>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-20 ">
          {
            data.length > 5 ? <SideNews API={API} data={data[5]} category={Rajiya} /> : <></>
          }
          {
            data.length > 6 ? <SideNews API={API} data={data[6]} category={Rajiya} /> : <></>
          }
          {
            data.length > 7 ? <SideNews API={API} data={data[7]} category={Rajiya} /> : <></>
          }
          {
            data.length > 8 ? <SideNews API={API} data={data[8]} category={Rajiya} /> : <></>
          }
          {
            data.length > 9 ? <SideNews API={API} data={data[9]} category={Rajiya} /> : <></>
          }
          {
            data.length > 10 ? <SideNews API={API} data={data[10]} category={Rajiya} /> : <></>
          }
        </div>
      </div>
    )
  }


  return (
    <>
      <section className="news-area mt-2">
        {
          data.map((item, key) => (

            <div className="container" key={key}>
              <div className="row row-10">
                <div className="col-40 pr-0">
                  <div className="section-title d-flex align-items-center mb-1 box-shodow text-Shadow" style={{
                    backgroundColor: '#a01f1f',
                    color: 'white',
                    borderRadius: '8px',
                    
                  }}>
                    <img style={{ borderRadius: '8px', width: '80px', height: '50px', marginRight: '2px', padding: '2px', filter: 'drop-shadow(rgb(132, 85, 99) 4px 3px 1px)' }} className='me-4 ml-1' src={`${API}${item.Image1}`} alt="" />
                    <MdDoubleArrow size={50} />

                    <h2
                      style={{
                        // padding: 13,
                        margin: 0,
                        fontSize: 21,
                        color: 'white',
                      }}
                    >
                      {item.SectionName}
                    </h2>
                  </div>

                </div>
                <div className="col-20 ">
                  <div className="section-title d-flex align-items-center box-shodow text-Shadow" style={{
                    backgroundColor: '#a01f1f',
                    color: 'white',
                    borderRadius: '8px',
                   
                  }}>
                    <img style={{ borderRadius: '8px', width: '71px', height: '50px', marginRight: '5px',padding: '2px', }} className='me-4 ml-1' src={`${API}${item.Image2}`} alt="" />
                    {/* <MdArrowForwardIos size={32} style={{marginLeft: '-10px'}} /> */}
                    {/* <Image width={40} style={{marginLeft: '-8px'}} height={40} src="arrow.svg"  /> */}
                    {/* <RiArrowRightSLine size={50} style={{marginLeft: '-10px'}} /> */}
                    <h2
                      style={{
                        padding: 8,
                        margin: 0,
                        fontSize: 18,
                        lineHeight: '7px',
                        color: 'white',
                      }}
                    >
                      {/* {data[0].Heading} */}
                      {item.SecondSection}
                    </h2>
                  </div>

                </div>
              </div>
              <NewsRow Rajiya={item.SectionName} />
            </div>
          ))
        }
      </section>
    </>

  )
}

export default ApradJagat;