import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const News = ({ data, category }) => {
  const API = process.env.NEXT_PUBLIC_BASE_URL;

  const router = useRouter();
  
  // Function to handle link click
  const handleClick = () => {
    router.push(`/inner/${data._id}`);
  };

  const MAX_WORDS = 14;

  function sliceByWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }

  // Inside your component

  return (
    <>
      <div className="postbox__text res-postbox__text img-filter-shadow">
        
          <div className="image-container2">
            <Image
              width={188}
              height={165}
              // src={data.Image && `${API}${data.Image}`}
              src={data.Image ? `${API}${data.Image}` : "/default.jpg"}

              style={{
                borderRadius: "14px",
                cursor: "pointer",
                maxWidth: "200px",
                minHeight: "153px",
              }}
              alt="hero image"
              onClick={handleClick}
            />
          </div>
        

        <h4 className="title-16 pr-0" onClick={handleClick}>
          {data.Heading && sliceByWords(data.Heading, MAX_WORDS)}
        </h4>
      </div>
    </>
  );
};

export default News;
