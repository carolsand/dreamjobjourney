const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  name: { type: String, max: 100 },
  description: { type: String, max: 250},
  activity: [{ type: Schema.Types.ObjectId, ref: 'Activity'}],
  jobtitle: { type: Schema.Types.ObjectId, ref: 'Job'},
  city: { type: String, max:100 },
  state: { type: String, max: 100},
  country: { type: String, max: 100 },
  }, {
    timestamps: true
  }); 

module.exports = mongoose.model('Experience', experienceSchema);