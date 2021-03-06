import React from 'react';
import './ProfilePage.css';

const ProfilePage = (props) => (
  <div className="card-body">
    {props.experiences.map((experience, idx) =>
        <div className="ProfilePage-experience" key={idx}>
          <span key={1 + idx}>Name: {experience.name}</span>
          <span key={2 + idx}>Activity: {experience.activity}</span>
          <span key={3 + idx}>Description:  {experience.description}</span>
        </div>     
    )}
  </div>
);
 

export default ProfilePage;