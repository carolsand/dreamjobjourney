import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

class ProfilePage extends Component {
  state = {
    name: '',
    email: '',
    loc_city: '',
    loc_state: '',
    loc_country: '',
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
            <input type="loc_city" className="form-control" placeholder="Location City" value={this.state.loc_city} name="loc_city" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="loc_state" className="form-control" placeholder="Location State" value={this.state.loc_state} name="loc_state" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="loc_country" className="form-control" placeholder="Location City" value={this.state.loc_country} name="loc_country" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default">SubmitProfile</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
  }
}

export default Profile;