const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true, max: 100},
  price: { any: Schema.Types.Mixed},
  description: { type: String, required: true, max: 100},
  city: { type: String, required: true, max: 100 },
  state: { type: String, required: true, max: 100},
  country: { type: String, required: true, max: 100 },

}, {
    timestamps: true
  });

module.exports = mongoose.model('Activity', activitySchema);