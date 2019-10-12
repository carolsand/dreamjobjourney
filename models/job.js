const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  jobtitle: { type: String, max: 100 },
  salary: { any: mongoose.Schema.Types.Mixed },
  description: { type: String, max: 200 },
  city: { type: String, max: 100 },
  state: { type: String, max: 100 },
  country: { type: String, max: 100 },

}, {
    timestamps: true
  });

module.exports = mongoose.model('Job', jobSchema);