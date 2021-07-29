// We need to include the path package to get the correct file path for our html
const fs = require("fs");

const generateUniqueId = require("generate-unique-id");

const editNote = (updatedNotesArray) => {
  fs.writeFile("./db/db.json", JSON.stringify(updatedNotesArray), (err) => {
    if (err) throw err;
  });
};

// ROUTING
module.exports = (app) => {
  // GET REQUEST
  // Setup the /api/notes GET route
  app.get("/api/notes", (req, res) => {
    // Read the db.json file and return all saved notes as JSON.
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      // Parse the JSON string into a JavaScript object
      res.json(JSON.parse(data));
    });
  });

  // POST REQUEST
  // Setup the /api/notes post route
  app.post("/api/notes", (req, res) => {
    // Receives a new note, adds it to the db.json file, returns the new note to the client
    const newNote = req.body;
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      // Parse the JSON string into a JavaScript object
      const notesArr = JSON.parse(data);
      newNote.id = generateUniqueId({ length: 10 });
      notesArr.push(newNote);

      editNote(notesArr);
      console.log(
        `New Note Added! Title: ${JSON.stringify(
          newNote.title
        )}, Text: ${JSON.stringify(newNote.text)}, ID: ${newNote.id}`
      );

      res.send(notesArr);
    });
  });

  // DELETE REQUEST
  // Setup the /api/notes/:id delete route
  app.delete("/api/notes/:id", (req, res) => {
    const deleteId = req.params.id;
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      let notesArr = JSON.parse(data);
      // removes the note with the given id property
      for (let i = 0; i < notesArr.length; i++) {
        if (notesArr[i].id === deleteId) {
          notesArr.splice(i, 1);
        }
      }
      editNote(notesArr);
      console.log(`Note Deleted! Note ID: ${deleteId}`);
      res.send(notesArr);
    });
  });

  // PUT REQUEST
  // Setup the /api/notes/:id put route
  app.put("/api/notes/:id", (req, res) => {
    const editId = req.params.id;

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;

      let notesArr = JSON.parse(data);

      let selectedNote = notesArr.find((note) => note.id === editId);

      // check if found
      if (selectedNote) {
        let updatedNote = {
          title: req.body.title, // set value of `title` get from req
          text: req.body.text, // set value of `text` get from req
          id: selectedNote.id,
        };
        //  find index at which the item is stored in the array
        let targetIndex = notesArr.indexOf(selectedNote);

        //  replace object data with `updatedNote` object
        notesArr.splice(targetIndex, 1, updatedNote);

        res.sendStatus(204);
        editNote(notesArr);
        res.json(notesArr);
      } else {
        res.sendStatus(404);
      }
    });
  });
};