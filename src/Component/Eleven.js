import React from 'react'

const Eleven = () => {
  return (
    <>
    <div className="section-eleven">
        <div className="container d-flex gap-5 justify-content-evenly">
            <div className='first-div'>
                <h4 className='div-h4'>Hello, we’re SQI College of ICT</h4>
                <h3 className='div-h3'>We provide and lead others in quality ICT education.</h3>
                <ul className='d-flex'>
                    <li><i class="fa fa-facebook-f"></i></li>
                    <li><i class="fa fa-twitter"></i></li>
                    <li><i class="fa fa-linkedin-in"></i></li>
                    <li><i class="fa fa-instagram"></i></li>
                    <li><i class="fa fa-youtube"></i></li>
                </ul>
                <h4>Send us a mail</h4>
                <p>
                    <a href="">enquiry@edu.sqi.ng</a>
                </p>   
            </div>

            <div className='d-flex justify-content-evenly gap-5'>
                <div>
                    <h6>Quick Links</h6>
                    <p>Application portal</p>
                    <p>Student portal</p>
                    <p>Professional Course</p>
                    <p>NID Course</p>
                    <p>Campus info</p>
                    <p>Accomodation</p>
                    <p>SQI Scholarship</p>
                    <p>Donate</p>
                </div>
                <div className='second-div'>
                    <h6>Ogbomosho</h6>
                    <p>Old Ilorin Road,Opposite Yoaco Filling Station,Yoaco, Ogbomoso.</p>
                    <p>0906 281 9991, 0906 281 9993</p>
                    <a href="">Locate on the map</a>
                </div>
                <div className='third-div'>
                    <h6>Ibadan</h6>
                    <p>First Floor, H25 Heritage Mall, Opposite Central Bank of Nigeria,Dugbe, Ibadan.</p>
                    <p>0906 281 9992</p>
                    <a href="">Locate on the map</a>
                    <p className='my-3'>Christianah Oyinade Ajoke House, beside First Bank, Arisekola Central Mosque, Opposite Jaiz bank, Idi Ape, Iwo road, Ibadan.</p>
                    <p>0906 281 9995</p>
                    <a href="">Locate on the map</a>
                </div>
                <div className='forth-div'> 
                    <h6>Abeokuta</h6>
                    <p>First floor, OPIC Tower building, Okeilewo, Abeokuta.</p>
                    <p>0906 281 9996</p>
                    <a href="">Locate on the map</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Eleven