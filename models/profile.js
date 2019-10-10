const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {type: Schema.Types.ObjectId, ref:'User'},
  city: { type: String, required: true, max: 100 },
  state: { type: String, required: true, max: 100},
  country: { type: String, required: true, max: 100},
  experiences: { type: Schema.Types.ObjectId, ref: 'Profile' }
}, {
    timestamps: true
  });


module.exports = mongoose.model('Profile', profileSchema);