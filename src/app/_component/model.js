import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import Image from "next/image";

const Model = ({ open }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const subtitle = useRef(null); // Define a ref for the subtitle
  const isClient = typeof window !== "undefined";

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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // if (subtitle.current) {
    //     subtitle.current.style.color = '#f00';
    // }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="text-center">
        <div className="container model-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="custom-model">
                <button className="cross" onClick={closeModal}>
                  <ImCross />
                </button>
                <Image
                  src="/donate.jpg"
                  alt=""
                  width={isClient && window.innerWidth > 768 ? 160 : 100}
                  height={isClient && window.innerWidth > 768 ? 120 : 90}
                />

                <div className="mb-1 mt-1 model-heading-bg">
                  <h4 className="model-heading">
                    अपने साथ लगातार जुड़े रहने के लिए हमें अपना सहयोग दें/दान
                    करें <span style={{ fontSize: "26px" }}>🙏</span>
                  </h4>
                </div>
                <div className="">
                  <table className="table table-striped table-dark table-responsive">
                    <tbody>
                      <tr>
                        <th scope="row">
                          <h4 className="text-left">Account Name / खाता नाम</h4>
                        </th>
                        <td>
                          <h4 className=" text-left">
                            Third Eye World News (Hindi)
                          </h4>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <h4 className=" text-left">Bank Name / बैंक नाम</h4>
                        </th>
                        <td>
                          <h4 className=" text-left">ICICI BANK</h4>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <h4 className="mt-0 text-left">
                            Account Number/खाता नंबर
                          </h4>
                        </th>
                        <td>
                          <h4 className="mt-0 text-left">000705029296</h4>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <h4 className="mt-0 text-left">
                            IFS Code/आईएफएस कोड
                          </h4>
                        </th>
                        <td>
                          <h4 className="mt-0 text-left">ICIC0000007</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Model;
