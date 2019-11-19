import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import experienceService from '../../utils/experienceService';
import './ExperienceForm.css';

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
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }
  handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await experienceService.addJobToExperience(this.state);
    }catch (err){
      console.log('Invalid user data');
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await experienceService.create(this.state);
      // Let <App> know a experience was created!
      this.props.handleCreateExperience();
      // Successfully created experience - show experience Experience page
      this.props.history.push('/');
    } catch (err) { 
      console.log('Invalid user data');
      // this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="main">
        <header className="header">Create Your Dream Experience</header>
          <label>
            <span>Job</span>
            <input name='jobtitle' />
          </label>
          <label>
            <span>Country</span>
            <select name='location'>
              <option value="country">Senegal</option>
              <option value="country">France</option>
              <option value="country">Israel</option>
              <option value="country">Fiji</option>
              <option value="country">Brussels</option>
              <option value="country">England</option>
              <option value="country">Morocco</option>
              <option value="country">Nigeria</option>
              <option value="country">Ethiopia</option>
              <option value="country">United States</option>
            </select>
          </label>
          <label>
            <span>Activity</span>
            <input name='activity' />
          </label>
          <label>
            <span>Country</span>
            <select name='location'>
              <option value="country">Senegal</option>
              <option value="country">France</option>
              <option value="country">Israel</option>
              <option value="country">Fiji</option>
              <option value="country">Brussels</option>
              <option value="country">England</option>
              <option value="country">Morocco</option>
              <option value="country">Nigeria</option>
              <option value="country">Ethiopia</option>
              <option value="country">United States</option>
            </select>
          </label>
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
            <hr />
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Your Dream Experience</button>&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>
                <hr />
              </div>
            </div>
          </form>
      </div>
    );
  }
}

export default ExperienceForm;
