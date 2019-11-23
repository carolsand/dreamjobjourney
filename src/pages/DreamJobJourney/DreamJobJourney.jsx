import React from 'react';
import './DreamJobJourney.css';
 
const DreamJobJourney = (props) => (
    <div className="container">
      {props.experiences.map((experience, idx) =>
          <div className="DreamJobJourneyPage-experience" >
            <span key={1 + idx}>Name: {experience.name}</span>
            <span key={2 + idx}>Activity: {experience.activity[idx]}</span>
            <span key={3 + idx}>Description:  {experience.description}</span>
            <span key={4 + idx}>City: {experience.city}</span>
            <span key={5 + idx}>State: {experience.state}</span>
            <span key={6 + idx}>Country: {experience.country}</span>
            &nbsp;&nbsp;*****************&nbsp;&nbsp;&nbsp;
          </div>
      )}
    </div>
);


export default DreamJobJourney;