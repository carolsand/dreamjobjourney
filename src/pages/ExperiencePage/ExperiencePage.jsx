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
            <span key={idx}>Name: {experience.name}</span>
            <span key={idx}> {experience.description}</span>
            <span key={idx}>Activity: {experience.activity[idx]}</span>
            <span key={idx}>City: {experience.city}</span>
            <span key={idx}>State: {experience.state}</span>
          </div>
        </>
      )}
    </div>
  </div>
);

export default ExperiencePage;