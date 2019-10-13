import React, { Component } from 'react';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm';
import SignupForm from '../../components/SignupForm/SignupForm';
import './ProfilePage.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' }
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  }

  render() {
    return (
      <div className='ProfilePage'>
        {/* <SignupForm {...this.props} updateMessage={this.updateMessage} /> */}
        <ExperienceForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default ProfilePage;