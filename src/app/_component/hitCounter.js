import React, { useState, useEffect } from "react";

const HitCounter = () => {
  // Initialize hit count state
  const [hits, setHits] = useState("");
  const API = process.env.NEXT_PUBLIC_BASE_URL;

  const getdata = async () => {
    const res = await fetch(`${API}/api/hits`);
    const result = await res.json()
    setHits(result[0].hits)
  };

  // Load hit count from local storage on component mount
  useEffect(() => {
    getdata()
  }, []);

  return (
    <span className="mb-0 visitor flex-lg-shrink-0 hover-effect">
      Number of Visitors: {hits}
    </span>
  );
};

export default HitCounter;
