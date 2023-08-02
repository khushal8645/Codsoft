import React from 'react';
import "./classes.css"
import Class1 from "./class1.webp";
import Class2 from "./class2.jpg";
import Class3 from "./class3.jpg";
import Class4 from "./class4.png";


const Classes = () => {
  return (

  <section id='classes'>

    <div className="heading-container">
      <div className='col-lg-12 heading'>
        <div className="title">
          <span>OUR CLASSES</span>
          <h2>WHAT WE CAN OFFER</h2>
        </div>
      </div>
      </div>

      <div className='class-container'>
      <div className='col-lg-6 col-md-6'>
          <div className='class-item'>
            <div className='pic'>
              <img src={Class1} alt='nothing' />
            </div>
            <div className='text'>
            <span>FLEXIBILITY</span>
            <h4>YOGA</h4>
            <a href='#'>
              <i className='fa fa-angle-right'></i>
            </a>
            </div>
          </div>
        </div>

        
        <div className='col-lg-6 col-md-6'>
          <div className='class-item'>
            <div className='pic'>
              <img src={Class2} alt='nothing' />
            </div>
            <div className='text'>
            <span>STRENGHT</span>
            <h4>WEIGHTLIFING</h4>
            <a href='#'>
              <i className='fa fa-angle-right'></i>
            </a>
            </div>
          </div>
        </div>

        <div className='col-lg-6 col-md-6 sec-container'>
          <div className='class-item'>
            <div className='pic'>
              <img src={Class3} alt='nothing' />
            </div>
            <div className='text'>
            <span>CARDIO</span>
            <h4>INDOOR CYCLING</h4>
            <a href='#'>
              <i className='fa fa-angle-right'></i>
            </a>
            </div>
          </div>
        </div>


        <div className='col-lg-6 col-md-6 sec-container'>
          <div className='class-item'>
            <div className='pic'>
              <img src={Class4} alt='nothing' />
            </div>
            <div className='text'>
            <span>STRENGHT</span>
            <h4>Kettlebell power</h4>
            <a href='#'>
              <i className='fa fa-angle-right'></i>
            </a>
            </div>
          </div>
        </div>



      </div>
  </section>
  )
}

export default Classes
