'use client'

import React from "react";
import Image from "next/image";

const FixedAdvert = ({advert, endpoint, position }) => {
    const API = 'https://new-backend-server-production.up.railway.app';
    const addposition = position;
  return (
    <div style={{ position: "fixed", top: "0", [addposition]: "5px", zIndex: "999" }}>
      <div className="d-grid justify-content-center mb-1 mt-1">
        {advert
          .filter((item) => item.location.includes(endpoint))
          .slice(0, 1)
          .map((item, key) => (
            <a
              key={key}
              target="_blank"
              href={item.url ? item.url : `${API}${item.Image2}`}
            >
              <Image
                width={180}
                height={725}
                src={item.Image1 && `${API}${item.Image1}`}
                alt=""
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default FixedAdvert;
