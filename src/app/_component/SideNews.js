import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SideNews = ({ data, category }) => {
  const API = "http://89.116.20.142:5000";

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

  return (
    <div className="post__small mb-3">
      <div className="post__small-thumb f-left img-filter-shadow">
        <a href="#">
          <div className="image-container2">
            <Image
              width={158}
              height={113}
              // src={`${API}${data.Image}`}
              src={data.Image ? `${API}${data.Image}` : "/default.jpg"}

              alt="hero image"
              style={{
                borderRadius: "12px",
                cursor: "pointer",
                width: 150,
                height: 110,
              }}
              onClick={handleClick}
            />
          </div>
        </a>
      </div>
      <div className="post__small-text fix  pl-10">
        <h4
          className="title-13 pr-0 mb-0 blueheading"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          {data.Heading && sliceByWords(data.Heading, MAX_WORDS)}
        </h4>
      </div>
    </div>
  );
};

export default SideNews;
