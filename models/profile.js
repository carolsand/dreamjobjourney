const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {type: Schema.Types.ObjectId, ref:'User'},
  city: { type: String, required: true, lowercase: true, unique: true },
  state: {type: CharField(max_length=50), required: true, unique: true},
  country: {type: CharField(max_length = 250), required: true, unique: true},
  experiences: { type: Schema.Types.ObjectId, ref: 'Profile' }
}, {
    timestamps: true
  });


export default profileSchema;