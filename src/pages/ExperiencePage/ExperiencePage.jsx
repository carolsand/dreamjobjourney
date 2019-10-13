import React, { Component } from 'react';
import experienceService from '../../utils/experienceService';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import './ExperiencePage.css';

class ExperiencePage extends Component {
  async componentDidMount() {
    const experiences = await experienceService.getAllExperiences();
    this.props.handleGetAllExperiences(experiences);
  }

  render() {
    const experiencesList = this.props.experiences.map((experience, idx) => (
      <div key={idx}>
        {experience}
        {/* <ExperienceForm {...this.props} /> */}
      </div>
    ));
    return experiencesList
  }
}

// const ExperiencePage = (props) => {
//   return (
//     <div className='ExperiencePage'>
//       <ExperienceForm 
      
//       />

//     </div>
//   )
// }
export default ExperiencePage;