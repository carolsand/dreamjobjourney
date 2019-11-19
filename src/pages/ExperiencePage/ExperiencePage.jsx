import React from 'react';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import './ExperiencePage.css';

// I want to show all the users experiences on this page

const ExperiencePage = (props) => (
  <div className= "main">
    <ExperienceForm
    />
    <div className="ExperiencePage" >
      {props.experiences.map((experience, idx) =>
          <div className="ExperiencePage-experience" >
            <span key={1 + idx}>Name: {experience.name}</span>
            <span key={2 + idx}> {experience.description}</span>
            <span key={3 + idx}>Activity: {experience.activity[idx]}</span>
            <span key={4 + idx}>City: {experience.city}</span>
            <span key={5 + idx}>State: {experience.state}</span>
          </div>
      )}
    </div>
  </div>
);

export default ExperiencePage;