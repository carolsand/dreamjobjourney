import React, { Component } from 'react';
import experienceService from '../../utils/experienceService';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import './ExperiencePage.css';
import InfoPage from '../InfoPage/InfoPage';
import { userInfo } from 'os';

class ExperiencePage extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const experiences = await experienceService.index();
    this.props.handleGetAllExperiences(experiences);
  }

  render() {
    const experiencesList = this.props.experiences.map((experience, idx) => (
      <div key={idx}>
        {experience}
        <ExperienceForm {...this.props} />
      </div>
    ));
    return 
  }
}

const ExperiencePage = (props) => {
  return (
    <div className='ExperiencePage'>
      <ExperienceForm 
      
      />

    </div>
  )
}
export default ExperiencePage;