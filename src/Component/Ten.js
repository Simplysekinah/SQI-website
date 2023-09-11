import React from 'react'

const Ten = () => {
  return (
    <>
    <div className="section-ten">
      <div className="container">
        <div className='d-flex justify-content-between'>
          <h2 className='ten-h2'>Latest News</h2>
          <div>
            <a href="" className='ten-link'>Read More</a>
          </div>
        </div>
        <div className='d-flex my-3 gap-5'>
          <article className='article-div'>
            <img src={require('../Component/sqijamb1-400x250.jpg')} alt="" className='article-img' />
              <h5 className='article-aa'>
                <a href="" className='article-a'>SQI College of ICT Post-UTME Examination Date, and Change of Institution 2023</a>
              </h5>
            <p className='article-p'>Jul 10 , 2023</p>
            <p className='article-pp'>SQI College of ICT Post-UTME <br /> Examination Date, and Change of <br /> Institution We would like to inform you that the SQI Post-UTME Examination has been slated for July 29, 2023. This examination is a crucial step towards gaining admission into SQI College of ICT for the...</p>
          </article>
          <article className='article-div'>
            <img src={require('../Component/Scholarship-banner--400x250.jpg')} alt="" />
              <h5>
                <a href="" className='article-a'>13TH SQI ICT Scholarship</a>
              </h5>
            <p className='article-p'>Jul 16, 2023</p>
            <p className='article-pp'>As technology continues to dominate various industries, the demand for professionals from diverse backgrounds who have upgraded their skills to meet market demands is on the rise. I hereby announce the launch of 2023 Scholarship. This year scholarship has been tagged:...</p>
          </article>
          <article className='article-div'>
            <img src={require('../Component/comSci1-400x250.jpg')} alt="" />
              <h5>
                <a href="" className='article-a'>Computer science in a nutshell</a>
              </h5>
            <p className='article-p'>Jul 16, 2023</p>
            <p className='article-pp'>Computer science is the study of how to use computers to solve problems. It is a vast and ever-evolving field, with new discoveries being made all the time. Computer scientists are the people who design, build, and maintain the computers that we use every day. They...</p>
          </article>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ten