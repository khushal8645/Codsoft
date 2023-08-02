import React from 'react';
import "./home.css";
import Carousel from 'react-bootstrap/Carousel';
import Gym1 from './gym1.jpg';
import Gym3 from './gym3.avif';
import Gym2 from './gym2.jpg';


const Home  = () => {

  return (
    <div className='page'>
    <Carousel className='page-container' data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100 gym1"
        src={Gym1}
        alt="First slide"
      />
      <Carousel.Caption className='st'>
    
        <h1>Shape Your Body</h1>
        <p>Be Strong<br/>Training Hard</p>
        <div className="line"></div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className=" d-block w-100 gym2"
        src={Gym3}
        alt="Second slide"
      />
      <Carousel.Caption className='nd'>
      <h1>Shape Your Body</h1>
      <p>Be Strong<br/>Training Hard</p>
      <div className="line2"></div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 gym3"
        src={Gym2}
        alt="Third slide"
      />
      <Carousel.Caption className='rd'>
      <h1>Shape Your Body</h1>
      <p>Be Strong<br/>Training Hard</p>
      <div className="line3"></div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </div>
);
}


export default Home;
