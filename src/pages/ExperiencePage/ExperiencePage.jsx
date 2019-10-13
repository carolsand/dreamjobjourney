import React, { Component } from 'react';
import experienceService from '../../utils/experienceService';
import './ExperiencePage.css';

class ExperiencePage extends Component {

  async componentDidMount() {
    const experiences = await experienceService.index();
    this.props.user.handleGetAllExperiences(experiences);
  }
 
  render() {
    const experience = this.experiences.map((experience, idx) => (
      <div key={idx}>
        {experience}
      </div>
    ));

    return (
      experience
    )
  }
}

export default ExperiencePage;