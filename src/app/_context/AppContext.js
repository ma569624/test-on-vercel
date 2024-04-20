'use client'
// contexts/AppContext.js
import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [advert, setAdvert] = useState([]);
  const [toplink, setToplink] = useState([]);
  const [AllBlogs, setAllBlogs] = useState([]);
  const [Rajiya, setRajiya] = useState([]);
  const [tagline, setTagline] = useState({});
  const [topKhabare, setTopKhabare] = useState({});
  const [idharbhi, setIdharbhi] = useState({});
  const [toplinks, setToplinks] = useState([]);
  const [todaynews, setTodayNews] = useState([]);
  const [badikhabar, setBadikhabar] = useState([]);

  const contextValue = {
    toplinks, setToplinks,
    idharbhi, setIdharbhi,
    topKhabare, setTopKhabare,
    data, setData,
    advert, setAdvert,
    toplink, setToplink,
    AllBlogs, setAllBlogs,
    Rajiya, setRajiya,
    tagline, setTagline,
    todaynews, setTodayNews,
    badikhabar, setBadikhabar
  };
  
  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
