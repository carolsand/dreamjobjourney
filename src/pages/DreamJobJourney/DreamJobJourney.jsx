import React from 'react';
import './DreamJobJourney.css';
 
const DreamJobJourney = (props) => (
  <div >
    <div className="DreamJobJourneyPage-experience">
      {props.experiences.map((experience, idx) =>
        <>
          <div className="DreamJobJourneyPage-experience" key={idx}>
            <span key={1}>{experience.name}</span>
            <span key={2}>{experience.description}</span>
            <span key={3}>{experience.activity[idx]}</span>
            <span key={4}>{experience.city}</span>
            <span key={5}>{experience.state}</span>
          </div>
        </>
      )}
    </div>
  </div>
);


export default DreamJobJourney;