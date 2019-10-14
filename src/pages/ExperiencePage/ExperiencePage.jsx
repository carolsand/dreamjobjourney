import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import experienceService from '../../utils/experienceService';
import ProfilePage from '../ProfilePage/ProfilePage'
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import './ExperiencePage.css';

// I want to show all the users experiences on this page

const ExperiencePage = (props) => (
  <div>
    <ExperienceForm
    />
    {props.experiences.map((experience, idx) =>
    <>
      <p>{experience.name}</p>
      <p>{experience.description}</p>
      <p>{experience.activity[idx]}</p>
      <p>{experience.jobtitle}</p>
      <p>{experience.city}</p>
      <p>{experience.state}</p>
      </>
    )}
  </div>
);

export default ExperiencePage;