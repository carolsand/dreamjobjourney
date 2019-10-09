import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card } from 'react-bulma-components';
import './Activity.css';

const Activity = (props) => {
   
  return (
    <div className="ActivityCard column is-one-third">
      <Card>
        <Link to={`/activity/${props.id}`}>
          <div className="card-image" style={{
            backgroundColor: props.typesArray[0].color
          }}>
            <img src={props.frontImage} alt={props.name} />
          </div>
          <div className="card-content">
            <h1 class="title is-3">
              {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
            </h1>
            {printableTypes}
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default Activity;