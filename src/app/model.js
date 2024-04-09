import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { ImCross } from "react-icons/im";

const Model = ({ open }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (open) {
            setIsOpen(true);
        }
    }, [open]);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgb(204 201 201)', // Change background color here
            border: '8px solid rgb(88 90 3)', // Add border for better visibility
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Add box shadow for a subtle effect
            borderRadius: '16px', // Add border radius for rounded corners
            padding: '2px', // Add padding for content spacing
            maxWidth: '663px', // Increase the width of the modal here
            width: '80%', // Set a percentage or pixel value for responsiveness
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark color with 50% opacity
            zIndex: 1000, // Adjust the z-index as needed
        }
    };
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
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
            <div class="text-center">
                <div class="custom-model">
                    <button className='cross' onClick={closeModal}><ImCross /></button>
                    <img src='/donate.jpg'  alt="" width={160} />

                    <div className="mb-1 mt-1 model-heading-bg">
                        <h4 className="model-heading">
                            अपने साथ लगातार जुड़े रहने के लिए हमें अपना सहयोग दें/दान करें <span style={{ fontSize: '26px' }}>🙏</span>
                        </h4>
                    </div>
                    <div className="row m-lg-3">
                        <table class="table table-striped table-dark ">

                            <tbody>
                                <tr >

                                    <th scope="row">
                                        <h5 class="text-left" >Account Name / खाता नाम</h5>
                                    </th>
                                    <td >
                                        <h5 class=" text-left">Third Eye World News (Hindi)</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <h5 class=" text-left">Bank Name / बैंक नाम</h5>
                                    </th>
                                    <td>
                                        <h5 class=" text-left">ICICI BANK</h5>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row">
                                        <h5 class="mt-0 text-left">Account Number/खाता नंबर</h5>
                                    </th>
                                    <td>
                                        <h5 class="mt-0 text-left">000705029296</h5>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <h5 class="mt-0 text-left">IFS Code/आईएफएस कोड</h5>

                                    </th>
                                    <td>
                                        <h5 class="mt-0 text-left">ICIC0000007</h5>

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </Modal>
    )
}

export default Model