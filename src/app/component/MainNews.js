import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const MainNews = ({ data, category }) => {
    const router = useRouter();

    const MAX_WORDS = 16;

    function sliceByWords(text, maxWords) {
        const words = text.split(' ');
        if (words.length > maxWords) {
          return words.slice(0, maxWords).join(' ') + '...';
        } else {
          return text;
        }
      }

    // Function to handle link click
    const handleClick = () => {
        router.push(`/inner/${data._id}`);
    };
    
    const API = 'http://localhost:5000';

    return (
        <div className="postbox mb-25">
            <div className="postbox__thumb image-container">
                <Image
                    width={752}
                    height={275}
                    src={data.Image && `${API}${data.Image}`}
                    style={{ borderRadius: '12px',cursor:'pointer', width: 752, height: 275, }}
                    alt="hero image" onClick={handleClick}
                />
            </div>
            <div className="postbox__text pt-10">
                <h4 className="title-18 pr-0 mainheading" style={{cursor:'pointer'}} onClick={handleClick} >
                    {/* {data.Heading}   */}
                    {data.Heading && sliceByWords(data.Heading, MAX_WORDS)}
                </h4>
                <h4 className="title-16 pr-0">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: data && data.Matter ? sliceByWords(data.Matter, 45) : "" }} />
                    </div>
                </h4>
            </div>
        </div>
    )
}

export default MainNews