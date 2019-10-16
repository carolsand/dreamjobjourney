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
          <div className="ExperiencePage-experience" key={idx}>
            <span key={1}>{experience.name}</span>
            <span key={2} >{experience.description}</span>
            <span key={3}>{experience.activity[idx]}</span>
            <span key={4}>{experience.city}</span>
            <span key={5}>{experience.state}</span>
          </div>
        </>
      )}
    </div>
  </div>
);

export default ExperiencePage;