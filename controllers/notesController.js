const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  //Find the notes
  const notes = await Note.find();
  //Respond with them
  res.json({ notes });
};
const fetchSingleNote = async (req, res) => {
  try {
    // Get the id of this URL
    const noteId = req.params.id;
    // Find the Note using this id
    const note = await Note.findById(noteId);
    if (note) {
      res.json({ note });
    } else {
      res.json({ error: "Note not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
const createNote = async (req, res) => {
  //get the sent in data of request body
  const { title, body } = req.body;
  //create a note with it
  const note = await Note.create({
    title,
    body,
  });
  //respond with the new note
  res.json({ note });
};
const updateNote = async (req, res) => {
  //Get the id of the url
  const noteId = req.params.id;
  //Get the data of the req body
  const { title, body } = req.body;
  //Find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title,
    body,
  });
  //Find updated note
  const note = await Note.findById(noteId);
  //Respond with it
  res.json({ note });
};
const deleteNote = async (req, res) => {
  //Get the id of the url
  const noteId = req.params.id;
  //Find and delete the record
  await Note.findByIdAndDelete(noteId);
  //Respond with it
  res.json({ message: "Note deleted successfully" });
};
module.exports = {
  fetchNotes,
  fetchSingleNote,
  createNote,
  updateNote,
  deleteNote,
};
