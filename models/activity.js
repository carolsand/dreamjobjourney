const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true, unique: true },
  price: String,
  description: {type: CharField(max_length=200), required: true},
  loc_city: { type: String, required: true, lowercase: true, unique: true },
  loc_state: { type: CharField(max_length = 50), required: true, unique: true },
  loc_country: { type: CharField(max_length = 250), required: true, unique: true },

}, {
    timestamps: true
  });

module.exports = mongoose.model(activitySchema);