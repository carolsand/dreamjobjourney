import React, { Component } from 'react';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm';
import Activity from '../../components/Activity/Activity';
import './ExperiencePage.css';
import InfoPage from '../InfoPage/InfoPage';

class ExperiencePage extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' }
  }

  updateMessage = (msg) => {
    this.setState({ message: msg });
  }

  render() {
    return (
      <div className='ExperiencePage'>
        <ExperienceForm {...this.props} updateMessage={this.updateMessage} />
        {/* <Activity /> */}
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default ExperiencePage;