const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, max: 100 },
  description: { type: String, max: 250},
  // activity: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}],
  activity: {type: String, max: 500},
  // jobtitle: { type: mongoose.Schema.Types.ObjectId, ref: 'Job'},
  jobtitle: {type: String, max: 250},
  city: { type: String, max: 100 },
  state: { type: String, max: 100},
  country: { type: String, max: 100 },
  }, {
    timestamps: true
  }); 

module.exports = mongoose.model('Experience', experienceSchema); 
