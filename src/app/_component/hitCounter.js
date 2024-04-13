import React, { useState, useEffect } from 'react';

const HitCounter = () => {
    // Initialize hit count state
    const [hits, setHits] = useState(5113161);

    // Load hit count from local storage on component mount
    useEffect(() => {
      const storedHits = localStorage.getItem('hitCount');
      if (storedHits) {
        setHits(parseInt(storedHits));
      }

      localStorage.setItem('hitCount', hits + 1);
    }, []);
  
  return (
      <span className='mb-0 visitor flex-lg-shrink-0 hover-effect'>Number of Visitors: {hits}</span>
  );
};

export default HitCounter;
