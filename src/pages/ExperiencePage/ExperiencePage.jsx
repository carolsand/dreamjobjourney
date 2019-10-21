import React from 'react';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import './ExperiencePage.css';

// I want to show all the users experiences on this page

const ExperiencePage = (props) => (
  <div >
    <ExperienceForm
    />
    <div className="ExperiencePage" >
      {props.experiences.map((experience, idx) =>
        <>
          <div className="ExperiencePage-experience" >
            <span key={idx}>{experience.name}</span>
            <span key={idx} >{experience.description}</span>
            <span key={idx}>{experience.activity[idx]}</span>
            <span key={idx}>{experience.city}</span>
            <span key={idx}>{experience.state}</span>
          </div>
        </>
      )}
    </div>
  </div>
);

export default ExperiencePage;