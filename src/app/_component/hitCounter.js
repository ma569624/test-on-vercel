import React, { useState, useEffect } from "react";
import { fetchhits } from "../_service_Api/ServiceAPI";

const HitCounter =  () => {
  // Initialize hit count state
  const [hits, setHits] = useState("");
  // const API = process.env.NEXT_PUBLIC_BASE_URL;

  // Load hit count from local storage on component mount
  useEffect(() => {
    (
      async () => {
        const result = await fetchhits();
        if(result){
          setHits(result?.data)
        }
      }
    )()
  }, []);

  return (
    <span className="mb-0 visitor flex-lg-shrink-0 hover-effect">
      Number of Visitors: {hits}
    </span>
  );
};

export default HitCounter;
