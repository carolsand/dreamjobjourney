import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../LoginPage/LoginPage.css';
import userService from '../../utils/userService';

class ProfilePage extends Component {
  state = {
    name: '',
    email: '',
    city: '',
    state: '',
    country: '',
  };

  render(){ return (

    <div className="ProfilePage">
      <header className="header-footer">Log In</header>
      <form className="form-horizontal" onSubmit={this.handleSubmit} >
        <div className="form-group">
          <div className="col-sm-12">
            <input type="name" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="loc_city" className="form-control" placeholder="Location City" value={this.state.city} name="loc_city" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="loc_state" className="form-control" placeholder="Location State" value={this.state.state} name="loc_state" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="loc_country" className="form-control" placeholder="Location City" value={this.state.country} name="loc_country" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default">Submit Profile</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
  }
}

export default ProfilePage;
