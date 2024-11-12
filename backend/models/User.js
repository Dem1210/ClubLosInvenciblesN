const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Phone: { type: String, required: true },
  Role: { type: String, enum: ['admin', 'member'], default: 'member' },
  JoinedDate: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
