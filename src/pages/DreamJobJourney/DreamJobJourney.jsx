import React from 'react';
import './DreamJobJourney.css';
 
const DreamJobJourney = (props) => (
  <div >
    <div className="DreamJobJourneyPage-experience">
      {props.experiences.map((experience, idx) =>
        <>
          <div className="DreamJobJourneyPage-experience" >
            <span key={idx}>{experience.name}</span>
            <span key={idx}>{experience.description}</span>
            <span key={idx}>{experience.activity[idx]}</span>
            <span key={idx}>{experience.city}</span>
            <span key={idx}>{experience.state}</span>
          </div>
        </>
      )}
    </div>
  </div>
);


export default DreamJobJourney;