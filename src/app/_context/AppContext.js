'use client'
// contexts/AppContext.js
import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [advert, setAdvert] = useState([]);
  // Add more state variables as needed
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataResponse = await fetch(`${process.env.API}/api/blogs?Status=active?page=1&limit=40&`);
        const advertResponse = await fetch(`${process.env.API}/api/advert?Status=active`);
        // Fetch other data here
        
        const dataJson = await dataResponse.json();
        const advertJson = await advertResponse.json();
        // Convert other responses to JSON here
        
        setData(dataJson);
        setAdvert(advertJson);
        // Set other state variables here
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data, setData, advert, setAdvert }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
