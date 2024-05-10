import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import Image from "next/image";

const SubscribersModel = ({ open }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userdata, setUserData] = useState({})
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
  
  function handlechange(e) {
    const name = e.target.name;
    const value = e.target.value;
    
    setUserData({...userdata, [name] : value})
  }

  const Submit = async (event) => {
    event.preventDefault()
    console.warn(userdata)

    const res = await fetch(`${API}/api/Subscribers`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userdata)
    })
    if (res.ok) {
      alert("Thanks for Subscribers Us")
    }
  }

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
            <div className="col-lg-12">
              <div className="">
                <button className="cross" onClick={closeModal}>
                  <ImCross />
                </button>

                <div className="mt-4 mb-2">
                  <form onSubmit={(e) => Submit(e)}>
                    <div className="mb-3 text-start">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label fs-5 text-dark"
                      >
                        Name
                      </label>
                      <input
                        name="name"
                        onChange={handlechange}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text text-dark">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3 text-start">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label fs-5 text-dark"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={handlechange}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                      <div id="emailHelp" className="form-text text-dark">
                        We'll never share your email with anyone else.
                      </div>
                    </div>
                    <div className="mb-3 text-start">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label fs-5 text-dark"
                      >
                        Whats Number
                      </label>
                      <input
                        name="Number"
                        onChange={handlechange}
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SubscribersModel;
