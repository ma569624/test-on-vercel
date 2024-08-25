"use client";
import React, { useEffect, useState } from "react";
import { fetchaddress } from "../_service_Api/ServiceAPI";

const Contact = () => {
  const [contact, setContact] = useState({});
  const API = process.env.NEXT_PUBLIC_BASE_URL;
  useEffect(() => {
    const getfounderdetails = async () => {
     
      const data = await fetchaddress()

      setContact(data[0]);
    };
    getfounderdetails();
  }, []);
  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-lg-12 ">
          <div className="patti-bg mb-3 pt-2 pb-2"
            style={{ border: "4px solid yellow" }}
          >
            <h2 className="text-Shadow m-0">हमारा पता / संपर्क करें</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div
            className="card box-shodow  p-3"
            style={{ borderRadius: "10px" }}
          >
            <div className="row">
              <div className="col-lg-12">
               
                <div
                className="containt"
                dangerouslySetInnerHTML={{
                  __html:
                    contact && contact.CompleteAddress
                      
                }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
