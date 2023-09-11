import React from 'react'

const One = () => {
  return (
    <>
        <div className='container-fluid d-flex bigdiv bg-danger justify-content-evenly'>
            <div className='big-textdiv'>
                <div>
                    <h1 className='big-text'>Study to become a global talent</h1>
                </div>
                <div className='big-testdiv-p'>
                    <p className='big-text-p'>Learn new tech skills using world-class <br /> curriculum and top industry experts.</p>
                </div>
                <button className='btn-start'>Start Now</button>
            </div>
            <div className='pic-div'>
                <img className='big-pic image-fluid' src={require('../Component/sqimodel.png')} alt="" />
            </div>
        </div>
    </>
  )
}

export default One