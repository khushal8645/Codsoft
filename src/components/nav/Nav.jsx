import React from 'react';
import "./nav.css";
import { IoIosFitness } from "react-icons/io";

const Nav = () => {
  return (
    <>
    <div className='navbar sticky'>
    <div className='logo'>
      <a href='index.html'><IoIosFitness className='logo-pic' /></a>
      <h3>ProGYM</h3>
      </div>
      <div className='icon'>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#classes'>Classes</a></li>
          <li><a href='#pricing'>Pricing</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      </div>
    </>
    )
}

export default Nav;
