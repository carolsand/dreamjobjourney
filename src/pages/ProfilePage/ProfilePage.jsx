import React, { Component } from 'react';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm';
import './ProfilePage.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ProfilePage'>
        <ExperienceForm {...this.props} updateMessage={this.updateMessage} />
      </div>
    );
  }
}

export default ProfilePage;