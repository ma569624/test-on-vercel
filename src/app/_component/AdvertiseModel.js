"use client";

import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import Link from "next/link";

const AdvertiseModel = ({ open }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userdata, setUserData] = useState({});
  const API = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    if (open) {
      setIsOpen(true);
    }
  }, [open]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(204 201 201)", // Change background color here
      border: "8px solid rgb(88 90 3)", // Add border for better visibility
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)", // Add box shadow for a subtle effect
      borderRadius: "16px", // Add border radius for rounded corners
      padding: "2px", // Add padding for content spacing
      maxWidth: "663px", // Increase the width of the modal here
      width: "80%", // Set a percentage or pixel value for responsiveness
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark color with 50% opacity
      zIndex: 1000, // Adjust the z-index as needed
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  // function handlechange(e) {
  //   const name = e.target.name;
  //   const value = e.target.value;

  //   setUserData({ ...userdata, [name]: value });
  // }

  const Submit = async (event) => {
    event.preventDefault();
    console.warn(userdata);

    const res = await fetch(`${API}/api/Subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    });
    if (res.ok) {
      alert("Thanks for Subscribers Us");
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="text-center">
        <div className="container model-container">
          <div className="row">
            <div className="card">
              <div className="card-body">
                <h3>आप विज्ञापन देना चाहते हैं?</h3>

                <Link
                  href="https://wa.link/z5iuz0"
                  target="_blank"
                  className="btn btn-primary me-2"
                >
                  हां
                </Link>
                <button onClick={closeModal} className="btn btn-primary">
                  नहीं
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AdvertiseModel;
