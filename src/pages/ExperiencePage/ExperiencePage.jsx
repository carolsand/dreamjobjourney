import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import experienceService from '../../utils/experienceService';
import ProfilePage from '../ProfilePage/ProfilePage'
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import './ExperiencePage.css';

// I want to show all the users experiences on this page

// console.log('the props passed to experience page ---->' + JSON.stringify(this.props));
const ExperiencePage = (props) => (
  <div>
    {props.experiences.map((experience, idx) =>
      <div
        name={experience.name}
        description={experience.description}
        activity={experience.activity[idx]}
      />
    )}
  </div>
);



export default ExperiencePage;