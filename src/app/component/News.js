import React from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const News = ({ data, category }) => {
  const API = 'http://localhost:5000'

  const router = useRouter();

  // Function to handle link click
  const handleClick = () => {
    router.push(`/inner/${data._id}`);
  };

  const MAX_WORDS = 14;

  function sliceByWords(text, maxWords) {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    } else {
      return text;
    }
  }

  // Inside your component


  return (
    <>
      <div style={{ minWidth: '190px', width: "205px !important", maxWidth: 'min-content' }} className="postbox__text">
        {
          data.Image && (
            <div className="image-container2">
            <Image
              width={190}
              height={153}
              src={data.Image && `${API}${data.Image}`}
              style={{ borderRadius: '14px', cursor: 'pointer', maxWidth: '190px', minHeight: '153px', }}
              alt="hero image"
              onClick={handleClick}
            />
            </div>
            
          )
        }

        <h4 className="title-16 pr-0" onClick={handleClick}>
         {data.Heading && sliceByWords(data.Heading, MAX_WORDS)}
        </h4>
      </div>
    </>
  )
}

export default News