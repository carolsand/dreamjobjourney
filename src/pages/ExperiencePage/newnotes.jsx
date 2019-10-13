import React, { Component } from 'react';
import experienceService from '../../utils/experienceService';
import './ExperiencePage.css';
import InfoPage from '../InfoPage/InfoPage';

class ExperiencePage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     experiences: experienceService.getAllExperiences,
  //   };
  // }

  async componentDidMount() {
    console.log('----> props.user' + props.user.experiences)
    const experiences = await experienceService.getAllExperiences();
    this.props.user.handleGetAllExperiences(user.experiences);
  }

  render() {
    console.log('-----> Experiences' + experiences)
    if (!experiences && experiences.length < 0) {
      const experience = this.experiences.map((experience, idx) => (
        <div key={idx}>
          {experience}
        </div>
      ));
    } else {
      return (
        <div >
          <InfoPage />
        </div>
      )
    }
  }
}

export default ExperiencePage;