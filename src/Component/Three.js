import React from 'react'

const Three = () => {
  return (
    <>
        <div>
            <div>
                <h3>Our alumni work at world-class companies around the world including</h3>
                <div className='d-flex'>
                    <div className='d-flex'>
                        <div>
                            <img src={require('../Component/google.png')} alt="" />
                        </div>
                        <div>
                            <img src={require('../Component/Interswitch.png')} alt="" />
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img src={require('../Component/Andela-log-landscape-blue-400px.png')} alt="" />
                        </div>
                        <div>
                            <img src={require('../Component/Microsoft_logo.png')} alt="" />
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='d-flex'>
                        <div>
                            <img src={require('../Component/Paystack.png')} alt="" />
                        </div>
                        <div>
                            <img src={require('../Component/Interswitch.png')} alt="" />
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img src={require('../Component/brewery.png')} alt="" />
                        </div>
                        <div>
                            <img src={require('../Component/Wema-Bank-Logo.png')} alt="" />
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                        <div className='d-flex'>
                            <div>
                                <img src={require('../Component/edozzier.png')} alt="" />
                            </div>
                            <div>
                                <img src={require('../Component/moneymie.png')} alt="" />
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <img src={require('../Component/Nigerian_Army.png')} alt="" />
                            </div>
                            <div>
                                <img src={require('../Component/aella-credit.png')} alt="" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Three