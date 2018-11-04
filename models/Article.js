var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({

  headline: {
    type: String,
    unique: {index: {unique:true}},
    requred: true
  },
  body: {
    type: String,
    requred: true
  },
  url: {
    type: String,
    requred: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    requred: false
  }


});

var Article = mongoose.model("Article", articleSchema);
module.exports = Article;
