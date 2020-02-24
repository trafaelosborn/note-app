var db = require("../db/db.json");
var fs = require("fs");
var id =  db.length + 1;
function apiroutes(app) {
  app.get("/api/notes", function(req, res) {
    res.json(db);
  });

  app.post("/api/notes", function(req, res) {
    req.body.id = id++;
    //   console.log(req.body);

      db.push(req.body);

      fs.writeFile("./db/db.json", JSON.stringify(db), function(err) {
        if (err) {
          console.log(err);
        }
      });

    res.json(db);
  });

  app.delete("/api/notes/:id", function(req, res) {
      var getid = req.params.id
      var myObject = {'id': getid};
            db.splice(db.indexOf(myObject),1);
          
      fs.writeFile("./db/db.json", JSON.stringify(db), function(err) {
        if (err) {
          console.log(err);
        }
      });
      res.json(db)
  })
}

module.exports = apiroutes;
