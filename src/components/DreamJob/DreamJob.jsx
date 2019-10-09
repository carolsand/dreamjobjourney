import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card } from 'react-bulma-components';
import './DreamJob.css';

const DreamJob = (props) => {
  const printableLocation = props.loc_stateArray.map((loc_state, idx) => {
    return <p key={idx}><strong>Location:</strong> {loc_state.name}</p>;
  });

  return (
    <div className="DreamJobCard column is-one-third">
      <Card>
        <Link to={`/activity/${props.id}`}>
          <div className="card-image" style={{
            backgroundColor: props.loc_stateArray[0].color
          }}>
            <img src={props.frontImage} alt={props.name} />
          </div>
          <div className="card-content">
            <h1 class="title is-3">
              {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </h1>
            {printableLocation}
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default DreamJob;