import React, { Component } from 'react';
import experienceService from '../../utils/experienceService';
import './ProfilePage.css';

// console.log('Props passed to profile page ------->'+ JSON.stringify(props));
const ProfilePage = (props) => (
  <div>
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