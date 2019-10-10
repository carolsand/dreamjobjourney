const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  jobtitle: { type: String, required: true, max: 100 },
  salary: { any: Schema.Types.Mixed },
  description: { type: String, required: true, max: 200 },
  city: { type: String, required: true, max: 100 },
  state: { type: String, required: true, max: 100 },
  country: { type: String, required: true, max: 100 },

}, {
    timestamps: true
  });

module.exports = mongoose.model('Job', jobSchema);