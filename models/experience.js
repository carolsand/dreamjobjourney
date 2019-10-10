const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 250},
  activity: { type: Schema.Types.ObjectId, ref: 'Activity'},
  jobtitle: { type: Schema.Types.ObjectId, ref: 'Job'},
  city: { type: String, required: true, max:100 },
  state: { type: String, required: true, max: 100},
  country: { type: String, required: true, max: 100 },
   }, {
    timestamps: true
  });

module.exports = mongoose.model('Experience', experienceSchema);