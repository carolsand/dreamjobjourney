import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import experienceService from '../../utils/experienceService';

class ExperienceForm extends Component {
  constructor(props) {
    super();
  this.state = {
    name: '',
    description: '',
    activity: [],
    jobtitle: {}, 
    city: '',
    state:'',
    country: '',
    passwordConf:''
  };
  }
  handleChange = (e) => {
    console.log("---> handle change");
    // this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }
  handleUpdate = async (e) => {
    console.log("-----> update job and activity" );
    e.preventDefault();
    try {
      await experienceService.addJobToExperience(this.state);
    }catch (err){
      console.log('Invalid user data');
    }
  }

  handleSubmit = async (e) => {
    console.log("---> handleSubmit");
    e.preventDefault();
    try {
      await experienceService.create(this.state);
      // Let <App> know a experience was created!
      this.props.handleCreateExperience();
      // Successfully created experience - show experience Experience page
      this.props.history.push('/');
    } catch (err) { 
      // Invalid user data
      // this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    console.log("---> ExperienceForm render() ");
    return (
      <div>
        <header className="header-footer">Create Your Dream Experience</header>
        <form className="form-horizontal" onSubmit={this.handleChange} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="city" value={this.state.city} name="city" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="state" value={this.state.state} name="state" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Your Dream Experience</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
        <hr />
        <form>
          <label>
            <span>Job</span>
            <input name='jobtitle' />
          </label>
          <label>
            <span>Location</span>
            <select name='location'>
              <option value="country">Bali</option>
              <option value="country">Paris</option>
              <option value="country">Tel Aviv</option>
              <option value="country">Fiji</option>
              <option value="county">Brussels</option>
            </select>
          </label>
          <button onClick={this.handleSubmit}>ADD JOB</button>
        </form>
        <form>
          <label>
            <span>Activity</span>
            <input name='activity' />
          </label>
          <label>
            <span>Location</span>
            <select name='location'>
              <option value="1">Bali</option>
              <option value="2">Paris</option>
              <option value="3">Tel Aviv</option>
              <option value="country">Fiji</option>
              <option value="county">Brussels</option>
            </select>
          </label>
          <button onClick={this.handleSubmit}>ADD ACTIVITY</button>
        </form>
        <hr />
      </div>
    );
    console.log("---> after return");
  }
}

export default ExperienceForm;
