import React, { Component } from 'react';
import experienceService from '../../utils/experienceService';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm'
import './ExperiencePage.css';

class ExperiencePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      experiences: experienceService.getAllExperiences
    }
  }
  async componentDidMount() {
    const experiences = await experienceService.getAllExperiences();
    this.props.handleGetAllExperiences(experiences);
  }

  render() {
    const experiencesList = this.experiences.map((experience, idx) => (
      <div key={idx}>
         {experience}
        <ExperienceForm 
       />
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