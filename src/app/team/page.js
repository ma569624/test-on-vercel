"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const API = process.env.NEXT_PUBLIC_BASE_URL;
  console.warn(API)
  const [team, setTeam] = useState([]);

  useEffect(() => {
    // Define an async function to fetch team data
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`${API}/api/team`);

        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        let data = await response.json();
        data.reverse();
        setTeam(data);  
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };
    fetchTeamData();
  }, []);


  return (
    <div className="container mt-3 mb-3 team p-lg-0">
      <div className="row">
        <div className="col-lg-12">
          <div
            className="patti-bg mb-3 pt-2 pb-2"
            style={{ border: "4px solid yellow" }}
          >
            <h2 className="text-Shadow m-0">हमारी टीम</h2>
          </div>
        </div>
      </div>
      <div className="row mx-1 mb-3">
        {team.map((item, key) => (
          <div className="col-lg-12" key={key}>
            <div className="card box-shodow  p-3 mt-3" >
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-top mb-3">
                    <Image
                      width={200}
                      height={200}
                      src={
                        item.EmployeeImage
                          ? `${API}${item.EmployeeImage}`
                          : "/default_repoter.png"
                      }
                      alt=""
                    />
                    <div>
                      <h4 className="text-Shadow">{item.EmployeeName}</h4>
                      <h5 className="text-Shadow">
                        {item.EmployeeDesignation}
                      </h5>
                      <h5 className="text-Shadow">{item.Place}</h5>
                    </div>
                  </div>

                  <div
                    className="containt"
                    dangerouslySetInnerHTML={{
                      __html:
                        item && item.EmployeeDetails
                          ? item.EmployeeDetails
                          : "",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-note box-shodow  p-2">
            <p className="m-0">
              नोट: आई वर्ल्ड न्यूज़ डॉट कॉम (www.thirdeyeworldnews.com) से जुड़े
              सभी सहयोगी अवैतानिक है जो स्वतंत्र रूप से अपना योगदान दे रहे हैं।
              ©Third Eye World News , www.thirdeyeworldnews.com नियम व शर्तें
              लागू।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
