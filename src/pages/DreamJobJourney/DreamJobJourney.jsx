import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

const DreamJobJourney = (props) => {
  return(
    <div className="DreamJobJourney">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
  )
  <footer className='header-footer'>
        {(props.user ? `Are You Logged in ${props.users} Yes!` : 'Good Luck!')}
      </footer>
    </div>
  );

};

export default DreamJobJourney;