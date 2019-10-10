const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  user: [userSchema],
  name: { type: String, required: true, lowercase: true, unique: true },
  description: { type: CharField(max_length = 200), required: true },
  activity: { type: CharField(max_length = 200), required: true },
  job: { type: CharField(max_length = 200), required: true },
  city: { type: String, required: true, lowercase: true, unique: true },
  state: { type: CharField(max_length = 70), required: true, unique: true },
  country: { type: CharField(max_length = 250), required: true, unique: true },
}, {
    timestamps: true
  });

module.exports = mongoose.model('Experience', experienceSchema);