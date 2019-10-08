import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Activity from '../../components/Activity/Activity';
import Job from '../../components/Job/Job';

class DreamJobJourney extends Component {
  render() {
    let dreamJobJourney = this.props.dreamJobJourney.map(journey => {
      return (
        <div style={{flex: 1}}>
          <Activity
            user={user.req.id}
            id={journey.id}
            name={journey.name}
            description={journey.description}
            loc_city={journey.loc_city}
            loc_state={journey.loc_state}
            loc_country={journey.loc_country}
            activity={journey.activity}
            // backImage={journey.sprites.back_shiny}
            // frontImage={journey.sprites.front_shiny}
          />
          <Job
            user={usr.req.id}
            name={Job.name}
            description={Job.description}
            name={Job.name}

          />
        </div>
      )
    });

    return (
      <Columns>
        {dreamJobJourney}
      </Columns>
    );
  }
}
export default DreamJobJourney;