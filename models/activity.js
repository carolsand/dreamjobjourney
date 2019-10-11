const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, max: 100},
  price: { any: Schema.Types.Mixed},
  description: { type: String, max: 100},
  city: { type: String, max: 100 },
  state: { type: String, max: 100},
  country: { type: String, max: 100 },

}, {
    timestamps: true
  });

module.exports = mongoose.model('Activity', activitySchema);