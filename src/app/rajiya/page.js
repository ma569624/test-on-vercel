'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { MdDoubleArrow } from "react-icons/md";


const Rajiya = ({ color }) => {
    const router = useRouter();
    const API = "http://localhost:5000";
    const [data, setdata] = useState([])
    const [blogs, setBlogs] = useState([])
    const [id, setid] = useState("");
    const [category, setCategory] = useState([])

    const getdata = async () => {
        const allblogs = await fetch(`${API}/api/allblogs`).then((res) => res.json())
        setBlogs(allblogs.data)

        const rajiya = await fetch(`${API}/api/rajiya`).then((res) => res.json())
        setdata(rajiya)
        console.warn()
    }

    const MAX_WORDS = 16;

    function sliceByWords(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        } else {
            return text;
        }
    }


    const handleClick = (id) => {
        router.push(`/inner/${id}`);
    };

    useEffect(() => {
        // setBlogs(Allblog)
        getdata();
    }, [])

    const MainNews = ({ data }) => {

        return (
            <div className="postbox mb-25">
                <div className="postbox__thumb">
                    <a href="#">
                        <img
                            src={`${API}${data.Image}`}
                            style={{ width: 722, height: 200, filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )' }}
                            alt="hero image"
                        />
                    </a>

                </div>
                <div className="postbox__text pt-10">
                    <h4 className="title-18 pr-0 mainheading" onClick={handleClick}>
                        {data.Heading && sliceByWords(data.Heading, MAX_WORDS)}
                    </h4>
                    <h4 className="title-16 pr-0">
                        <div >
                            <div dangerouslySetInnerHTML={{ __html: data.Matter.slice(0, 140) }} />
                        </div>
                    </h4>
                </div>
            </div>

        )
    }
    const NewsRow = ({ Rajiya }) => {

        const [data, setData] = useState([])
        useEffect(() => {
            console.warn(Rajiya)
            let filter = blogs.filter((item) => item.Category.includes(Rajiya))
            setData(filter)
            console.warn(filter)
        }, [Rajiya])

        return (
            <>
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="section-title mt-2">

                            <div className="container">
                                <div className="row rajiya">
                                    {data.map((item, key) => <div className="col-lg-3">
                                        <div className="postbox mb-25" key={key}>
                                            <div className="postbox__thumb image-container">
                                                <a href="#">
                                                    <img
                                                        src={`${API}${item.Image}`}
                                                        style={{ width: 722, height: 200, filter: 'drop-shadow(rgb(102, 102, 102) 4px 4px 1px )' }}
                                                        alt="hero image"
                                                    />
                                                </a>

                                            </div>
                                            <div className="postbox__text mt-4">
                                                <h4 className="title-18 pr-0" onClick={handleClick}>
                                                    {item.Heading && sliceByWords(item.Heading, MAX_WORDS)}
                                                </h4>

                                                <h4 className="title-16 pr-0">
                                                    <div >
                                                        <div dangerouslySetInnerHTML={{ __html: item.Matter.slice(0, 140) }} />
                                                    </div>
                                                </h4>

                                            </div>
                                        </div>
                                    </div>)}
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row ">
                    <div className="col-lg-12">
                        <div className="pagination text-center">
                            <ul>
                                <li>
                                    <a className="hover-effect" >
                                        पिछली ख़बर
                                    </a>
                                </li>

                                <li>
                                    <a className="hover-effect" >
                                        अगली ख़बर
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>


            <section className="news-area pt-2 pb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="patti-bg  mb-3 section-title text-center section-title2  box-shodow ">
                                <h2 className='m-0 p-0'>
                                <MdDoubleArrow size={50} className='mr-2' />
                                    ख़बरें राज्यों से
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    data.map((item, key) => (

                        <div className="container pb-5" key={key}>
                            <div className="row ">
                                <div className="col-lg-12">
                                    <div className="section-title2 d-flex justify-content-center" style={{ backgroundColor: '#3e256e' }}>
                                        <img style={{ borderRadius: '8px', width: '80px', height: '50px', marginRight: '24px', padding: '2px', filter: 'drop-shadow(rgb(132, 85, 99) 4px 3px 1px)' }} className='me-4 ml-1' src={`${API}${item.Image1}`} alt="" />
                                        <h2 className='m-0 '>
                                            {/* {data[0].Heading} */}
                                            <MdDoubleArrow size={50} className='mr-2' />

                                            {item.StateName}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <NewsRow Rajiya={item.StateName} />

                        </div>))
                }
            </section>
        </>
    )

}

export default Rajiya