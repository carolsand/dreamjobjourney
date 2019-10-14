import React, { Component } from 'react';
import experienceService from '../../utils/experienceService';
import './ProfilePage.css';

const ProfilePage = (props) => (
  <div className="ProfilePage">
    {props.experiences.map((experience, idx) =>
      <>
        <p>{experience.name}</p>
        <p>{experience.description}</p>
        <p>{experience.activity[idx]}</p>
      </>
    )}
  </div>
);
 

export default ProfilePage;