import React from 'react';
import "./pricing.css";

const Pricing = () => {
  return (
    <section id='price-container'>

      <div className='conatiner'>

        <div className='heading'>
          <div className='col-lg-12'>
            <div className='title'>
              <span>Our Plans</span>
              <h2>Choose Your pricing</h2>
            </div>
          </div>
        </div>

        <div className='prices justify-content-center'>

          <div className='col-md-4 col-lg-8'>
            <div className='ps-item'>
              <h3>Class Drop-In</h3>
              <div className='pi-item'>
                <h2>$ 39.0</h2>
                <span>SINGLE CLASS</span>
              </div>
              <ul>
                <li>Free riding</li>
                <li>Unlimited equipments</li>
                <li>Personal trainer</li>
                <li>Weight losing classes</li>
                <li>Month to mouth</li>
                <li>No time restriction</li>
              </ul>
              <a href="#" class="primary-btn pricing-btn">Enroll now</a>
            </div>
          </div>


          <div className='col-md-4 col-lg-8'>
            <div className='ps-item'>
              <h3>12 Months Subscription</h3>
              <div className='pi-item'>
                <h2>$ 99.0</h2>
                <span>SINGLE CLASS</span>
              </div>
              <ul>
                <li>Free riding</li>
                <li>Unlimited equipments</li>
                <li>Personal trainer</li>
                <li>Weight losing classes</li>
                <li>Month to mouth</li>
                <li>No time restriction</li>
              </ul>
              <a href="#" class="primary-btn pricing-btn">Enroll now</a>
            </div>
          </div>



          <div className='col-md-4 col-lg-8'>
            <div className='ps-item'>
              <h3> 6 Months Subscription</h3>
              <div className='pi-item'>
                <h2>$ 59.0</h2>
                <span>SINGLE CLASS</span>
              </div>
              <ul>
                <li>Free riding</li>
                <li>Unlimited equipments</li>
                <li>Personal trainer</li>
                <li>Weight losing classes</li>
                <li>Month to mouth</li>
                <li>No time restriction</li>
              </ul>
              <a href="#" className="primary-btn pricing-btn">Enroll now</a>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Pricing
