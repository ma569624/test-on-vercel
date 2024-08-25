import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchSearch } from "../_service_Api/ServiceAPI";


const SearchModel = ({ open }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const API = process.env.NEXT_PUBLIC_BASE_URL;
  const router = useRouter();

  const handleClick = (id) => {
    setIsOpen(false)
    setData([])
    window.scrollTo({ top: 500, behavior: "smooth" });
    router.push(`/Top/${id}`);
  };
 

  const MAX_WORDS = 10;

  function sliceByWords(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return text;
    }
  }

  useEffect(() => {
    if (open) {
      setIsOpen(true);
    }
  }, [open]);

  const customStyles = {
    content: {
      top: "40%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      // backgroundColor: "rgb(204 201 201)", // Change background color here
      // border: "8px solid rgb(88 90 3)", // Add border for better visibility
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

  async function handlechange(e) {
    const value = e.target.value;

    const data = await fetchSearch(value)
    data ? setData(data.data) : setData([])

  }


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="text-center">
        <div className="container model-container" style={{backgroundColor: 'darkblue'}}>
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <button className="cross" onClick={closeModal}>
                  <ImCross />
                </button>

                <div className="mt-5 mb-2">
                  <form onSubmit={(e) => Submit(e)}>
                    <div className="mb-3 text-start">
                      <input
                        name="name"
                        onChange={handlechange}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Search here..."
                      />
                    </div>

                    {/* <button type="submit" className="btn btn-primary">
                      Submit
                    </button> */}
                  </form>
                  <ul style={{height: '400px', overflow: 'scroll', scrollBehavior: 'smooth'}}>
                    {data.map((item, key) => (
                      <li className="text-white my-2" style={{cursor: "pointer"}} onClick={() => handleClick(item.order)} key={key}>
                        
                        <div className="d-flex gap-2">
                          <div>
                            <Image height={50} width={50}  src={item.Image && `${API}${item.Image}`}/>
                          </div>
                          <div>
                            {/* <h6>{item.Category}</h6> */}
                            <h6>{item.Heading}</h6>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SearchModel;
