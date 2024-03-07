const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  text: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", noteSchema);
