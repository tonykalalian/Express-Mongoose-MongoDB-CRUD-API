//:Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
//Import dependencies
const express = require("express");
const connectToDb = require("./config/db");
const notesController = require("./controllers/notesController");
const cors = require("cors");
//Create an express app
const app = express();
app.use(cors());
//configure express app
app.use(express.json());
//connect to database
connectToDb();
//Routing
app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchSingleNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);
//Start our server
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
