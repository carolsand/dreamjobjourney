import React, { Component } from 'react';
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import InfoPage from '../InfoPage/InfoPage';
 
const DreamJobJourney = (props) => (
  <div className="DreamJobJourneyPage">
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