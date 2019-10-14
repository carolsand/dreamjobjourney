import React, { Component } from 'react';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import './ExperiencePage.css';

// I want to show all the users experiences on this page

const ExperiencePage = (props) => (
  <div >
    <ExperienceForm
    />
    <div className="ExperiencePage">
      {props.experiences.map((experience, idx) =>
        <>
          <div className="ExperiencePage-experience">
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

export default ExperiencePage;