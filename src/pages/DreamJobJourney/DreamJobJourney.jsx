import React, { Component } from 'react';
import userService from '../../utils/userService';
import experienceService from '../../utils/experienceService';
import ExperiencePage from '../ExperiencePage/ExperiencePage';
 
// console.log("---> this.props in dreamjobjourney page: " + JSON.stringify(props.experiences));
// console.log("---> this.props.experiences in dreamjobjourney page: " + JSON.stringify(this.props.experiences));
const DreamJobJourney = (props) => (
  <div>
    {props.experiences.map((experience, idx) =>
      <>
        <p>{experience.name}</p>
        <p>{experience.description}</p>
        <p>{experience.activity[idx]}</p>
        <p>{experience.city}</p>
        <p>{experience.state}</p>
      </>
    )}
  </div>
);

export default DreamJobJourney;