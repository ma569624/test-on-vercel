import React from 'react'

const Contact = () => {
    return (
        <div className="container mt-3 mb-3">

            <div className="row">
                <div className="col-lg-12 ">
                    <div className="patti-bg mb-3 pt-2 pb-2" style={{ border: '4px solid yellow' }}>
                        <h2 className='text-Shadow m-0'>
                                हमारा पता / संपर्क करें
                            </h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="card box-shodow  p-3" style={{ borderRadius: '10px' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card-top">
                                    <h4 className='m-0 text-Shadow'>हमारा पता -</h4>
                                    <h4 className='m-0 text-Shadow' style={{ lineHeight: 2 }}>संपर्क करें -</h4>
                                    <h4 className='mb-0 text-Shadow'>Email -ID</h4>
                                    <h4 className='mb-0 text-Shadow'>thirdeyeworldnews@gmail.com</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact