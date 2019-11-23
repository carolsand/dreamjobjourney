import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='navbar'>
      {/* <Link to='/dream-job-journey' className='NavBar-link'>Dream Experiences</Link>
      &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp; */}
      <Link to='/dream-job-journey' className='nav-link'>Home</Link>
      &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
      <Link to='/experience-page' className='nav-link'>Create Experience </Link>
      &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
      <Link to='/profile-page' className='nav-link'> {props.user.name}'s Profile Page</Link>
      &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
      <Link to='/profile-page' className='nav-link'>{props.user.name}'s Page</Link>
      &nbsp;&nbsp;|||&nbsp;&nbsp;&nbsp;
      <Link to='' className='nav-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      {/* <input class="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search"></input> */}
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