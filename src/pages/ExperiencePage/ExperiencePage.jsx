import React from 'react';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import './ExperiencePage.css';

// I want to show all the users experiences on this page

const ExperiencePage = (props) => (
  <div className= "container">
    <ExperienceForm
    />
    <div className="card-body">
      {props.experiences.map((experience, idx) =>
          <div className="ExperiencePage-experience" key={idx}>
            <span key={1 + idx}>Name: {experience.name}</span>
            <span key={2 + idx}>Activity: {experience.activity}</span>
            <span key={3 + idx}>Description: {experience.description}</span>
            <span key={4 + idx}>City: {experience.city}</span>
            <span key={5 + idx}>State: {experience.state}</span>
            <span key={6 + idx}>Country: {experience.country}</span>
          </div>
      )}
    </div>
  </div>
);

export default ExperiencePage;