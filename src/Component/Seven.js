import React from 'react'

const Seven = () => {
  return (
    <>
    <div className="section-seven">
      <div className="container">
        <div>
          <h2 className='seven-h2'>Testimonials</h2>
          <p className='seven-p'>Read what our current students and alumni have to say about their SQI experience.</p>
        </div>
        <div className='d-flex'>
          <div>
            <div>
              <img src={require('../Component/2021-07-31.jpg')} alt="" className='div-img' />
            </div>
            <div>SQI College of ICT IBADAN</div>
            <div className='d-flex align-items-center gap-2 fs-4'>
              <span>4.9</span>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div>Based on 84 reviews</div>
            <img src={require('../Component/powered_by_google_on_white.png')} alt="" className='fs-6' />
          </div>
          <div className="carousel-div">
              
          </div>
          <div>
            <div>
              <div className='d-flex gap-3'>
                <img src={require('../Component/2021-07-31.jpg')} alt="" className='div-img' />
                <div>
                  <div>Oluwaseyi Odekomaya</div>
                  <p>2 years</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-2 fs-4'>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className='c-overflow'>
                <div>I've compared other platforms to this one to be honest and they don't measure up. The platforms that give a comparable level of the quality of skills cost a lot more and don't even offer a guarantee of access to real world project and situations... The ones available at a cheaper price so to say do not give a level of quality even close to it... Some platforms charge a lot more and yet still falter in the delivery of good contents... Another aspect that I noticed in comparison is that instructors at SQI College of ICT are actually interested in ensuring their students understand what they are learning. They take joy in ensuring the students comprehend and are able to apply what is being taught and explain in the simplest ways possible to ensure maximum comprehension....I'm not sharing this because I have any affiliation with SQI College of ICT, I'm doing so because it's simply the truth. If anyone else tries to make their research, they will find out that it's true too.</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Seven