const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true, lowercase: true, unique: true },
  price: String,
  description: {type: CharField(max_length=200), required: true},
  city: { type: String, required: true, lowercase: true, unique: true },
  state: { type: CharField(max_length = 50), required: true, unique: true },
  country: { type: CharField(max_length = 250), required: true, unique: true },

}, {
    timestamps: true
  });

module.exports = mongoose.model('Activity', activitySchema);