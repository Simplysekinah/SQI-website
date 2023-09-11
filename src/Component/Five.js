import React from 'react'

const Five = () => {
  return (
    <>
      <div>
          <div className='container d-flex justify-content-around'>
            <div className='side-left'>
              <div>
                <h2>Our Top Courses</h2>
                <p>Take a look at some of our courses</p>
                <div>
                  <a href="">View all Courses</a>
                </div>
              </div>
              <div className='software-div'>
                <div>
                  <img src={require('../Component/software-engineering-630x330-1.webp')} alt="" className='software-pic' />
                </div>
                <h2 className='software-word'>Software Engineering</h2>
                <p className='software-p'>Software Engineering is one of the most in-demand jobs across the globe today.</p>
                <p className='software-pp'>Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</p>
                <a href="">Learn More</a>
              </div>
              <div className='ui-div'>
                <div>
                  <img src={require('../Component/product.jpg')} alt="" className='ui-pic' />
                </div>
                <h2 className='ui-word'>UI/UX – Product Design</h2>
                <p className='ui-p'>More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users.</p>
                <p className='ui-pp'>Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.</p>
                <a href="">Learn More</a>
              </div>
            </div>
            <div>
              <div className='data-div'>
                <div>
                  <img src={require('../Component/DATA-SQI.jpg')} alt="" className='data-pic' />
                </div>
                <h2 className='data-word'>Data Science & Analysis</h2>
                <p className='data-p'>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.</p>
                <p className='data-pp'>Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.</p>
                <a href="">Learn More</a>
              </div>
              <div className='digital-div'>
                <div>
                  <img src={require('../Component/digital-literacy.jpg')} alt="" className='digital-pic' />
                </div>
                <h2 className='digital-word'>Digital Literacy</h2>
                <p className='digital-p'>This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).</p>
                <p className='digital-pp'>Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.</p>
                <a href="">Learn More</a>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Five