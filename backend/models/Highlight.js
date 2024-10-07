const mongoose = require('mongoose');

const highlightSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  ImageURL: { type: String, required: true },
  Date: { type: Date, default: Date.now },
});

const Highlight = mongoose.model('Highlight', highlightSchema);
module.exports = Highlight;
