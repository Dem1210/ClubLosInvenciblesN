const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Date: { type: Date, required: true },
  Location: { type: String, required: true },
  Description: { type: String, required: true },
  ImageURL: { type: String, required: true },
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
