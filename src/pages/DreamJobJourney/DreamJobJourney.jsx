import React from 'react';
import './DreamJobJourney.css';
 
const DreamJobJourney = (props) => (
  <div >
    <div className="DreamJobJourneyPage-experience">
      {props.experiences.map((experience, idx) =>
        <>
          <div className="DreamJobJourneyPage-experience">
            <span>{experience.name}</span>
            <span>{experience.description}</span>
            <span>{experience.activity[idx]}</span>
            <span>{experience.city}</span>
            <span>{experience.state}</span>
          </div>
        </>
      )}
    </div>
  </div>
);


export default DreamJobJourney;