 const fs = require("fs");
 const path = require("path");
 let notes = [].concat(JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8")))
//sendFile(path.join(__dirname, "../db/db.json"))

 function data (app) {

  app.get("/api/notes", (req, res) => {
    res.json(notes)
  });

 app.post("/api/notes", (req, res) => {
  let newNote = {
    id:Math.random() * 10000000,
    title:req.body.title,
    text:req.body.text
  };

         
         notes.push(newNote);
         fs.writeFileSync("./db/db.json",JSON.stringify(notes));
        res.json(notes);
  });


  app.delete("/api/notes/:id", (req, res) => {
    console.log(req)
    console.log(req.params.id)
    notes.filter((note) => parseInt(note.id) !== parseInt(req.params.id))
    
    //.then(() => res.json({ ok: true }))
    //.catch((err) => res.status(500).json(err))
    fs.writeFileSync("./db/db.json",JSON.stringify(notes));
    res.json(notes);
      console.log(notes)
  });
};
 module.exports = data;
