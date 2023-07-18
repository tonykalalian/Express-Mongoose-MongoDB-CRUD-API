const mongoose = require("mongoose");
//Definining the schema
const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
});
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;