import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/dream-job-journey' className='NavBar-link'>Dream Experiences</Link>
      &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
      <Link to='/experience-page' className='NavBar-link'>Create An Experience </Link>
      &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
      <Link to='/profile-page' className='NavBar-link'>Welcome {props.user.name} Profile Page</Link>
      &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;