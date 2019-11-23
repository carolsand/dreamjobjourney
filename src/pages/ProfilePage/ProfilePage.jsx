import React from 'react';
import './ProfilePage.css';
import {Button} from 'react-bootstrap';

const ProfilePage = (props) => (
  <div className="container">
    {props.experiences.map((experience, idx) =>
      <>
        <div className="ProfilePage-experience" key={idx}>
          <span>{experience[idx]}</span>
          <span>{experience.description}</span>
          <span>{experience.activity[idx]}</span>
        </div>
      </>
    )}
  </div>
);
 

export default ProfilePage;