import React, { Component } from 'react';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm';
import './ProfilePage.css';

class ProfilePage extends Component {
  render() {
    return (
      <div className='ProfilePage'>
        <ExperienceForm 
        {...this.props} />
      </div>
    );
  }
}

export default ProfilePage;