const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true, unique: true },
  email: { type: String, required: true, lowercase: true, unique: true },
  loc_city: { type: String, required: true, lowercase: true, unique: true },
  loc_state: {type: CharField(max_length=50), required: true, unique: true},
  loc_country: {type: CharField(max_length = 250), required: true, unique: true},

}, {
    timestamps: true
  });


export default profileSchema;