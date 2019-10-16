import React from 'react';
import './ProfilePage.css';

const ProfilePage = (props) => (
  <div className="ProfilePage">
    {props.experiences.map((experience, idx) =>
      <>
        <div className="ProfilePage-experience" key={idx}>
          <span>{experience.name}</span>
          <span>{experience.description}</span>
          <span>{experience.activity[idx]}</span>
        </div>
      </>
    )}
  </div>
);
 

export default ProfilePage;