const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true, max: 100 },
  description: { type: String, required: true, max: 100},
  activity: { type: String, required: true, max: 100},
  job: { type: String, required: true, max: 100 },
  city: { type: String, required: true, max:100 },
  state: { type: String, required: true, max: 100},
  country: { type: String, required: true, max: 100 },
   }, {
    timestamps: true
  });

module.exports = mongoose.model('Experience', experienceSchema);