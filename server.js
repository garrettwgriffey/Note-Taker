var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoute.js")(app);
require("./routes/apiRoute.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});