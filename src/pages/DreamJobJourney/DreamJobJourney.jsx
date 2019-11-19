import React from 'react';
import './DreamJobJourney.css';
 
const DreamJobJourney = (props) => (
    <div className="DreamJobJourneyPage">
      {props.experiences.map((experience, idx) =>
          <div className="DreamJobJourneyPage-experience" >
            <span key={1 + idx}>{experience.name}</span>
            <span key={2 + idx}>{experience.activity[idx]}</span>
            <span key={3 + idx}>{experience.description}</span>
            <span key={4 + idx}>{experience.city}</span>
            <span key={5 + idx}>{experience.state}</span>
          </div>
      )}
    </div>
);


export default DreamJobJourney;