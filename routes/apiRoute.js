let db = require("../db/db.json");
const fs = require("fs");
const myIds = db.map(obj => obj.id)
module.exports = function(app) {
// GET "/api/notes" responds with all notes from the database
app.get("/api/notes", function(req, res) {
  res.json(db);
});

app.post("/api/notes", function(req, res) {
  let newId = myIds[myIds.length - 1]
  while(myIds.includes(newId)) {
    newId ++
  }
  myIds.push(newId)
  req.body.id = newId
  db.push(req.body)
  fs.writeFile("./db/db.json", JSON.stringify(db), err => {
    if (err) throw err 
  } )
  res.redirect("/notes")
});


app.delete("/api/notes/:id", function(req, res) {
  const id = parseInt(req.params.id)
  db = db.filter(obj => obj.id !== id)
  console.log(db)
  fs.writeFile("./db/db.json", JSON.stringify(db), err => {
    if (err) throw err } )
  res.send("deleted")
});
}



