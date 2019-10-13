import React from 'react';
import img from '../images/logoPetraTrek2TheCity.jpg';
// import logo from './logo.png'; // Tell Webpack this JS file uses this image

function Footer() {
  // Import result is the URL of your image
  return <img src={img} alt="Logo" />;
}

export default Footer;

