const express = require('express');
const app = express();
const mongoose = require('mongoose');
var exphbs = require("express-handlebars");
var routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout : "main" }))
app.set("view engine", "handlebars");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.use(routes);
// app.get('/', (req, res) => {
//   res.send("Hello World!");
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT);
