import React from "react";
import Image from "next/image";

const ImageTag = ({ src, width, height }) => {
  const API = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}`;

  return (
    <>
      {src !== undefined && src !== 'undefined '&& src.length > 0 && (
        <Image
          width={width}
          height={height}
          src={`${API}${src}`}
          alt="hero image"
        />
      )}
    </>
  );
};

export default ImageTag;
