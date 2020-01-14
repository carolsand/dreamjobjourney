import React from 'react';
import './DreamJobJourney.css';
 
const DreamJobJourney = (props) => (
    <div className="container">
      {props.experiences.map((experience, idx) =>
          <div className="DreamJobJourneyPage-experience" key={idx} >
            <span key={1 + idx}>Name: {experience.name}</span>
            <span key={2 + idx}>Activity: {experience.activity}</span>
            <span key={3 + idx}>Description:  {experience.description}</span>
            <span key={4 + idx}>Job:  {experience.jobtitle}</span>
            <span key={5 + idx}>City: {experience.city}</span>
            <span key={6 + idx}>State: {experience.state}</span>
            <span key={7 + idx}>Country: {experience.country}</span>
          </div>
      )}
    </div>
);


export default DreamJobJourney;