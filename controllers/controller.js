var db = require("../models");
var scrape = require("../scraper/scrape.js");


module.exports = {

  articleFind: function(req, res) {
    db.Article
  },

  articleRemove: function(req, res) {
    db.Article.remove({});
  },

  articleUpdate: function(req, res) {
    db.Article.update({})
      res.json();
  },

  noteFind: function(req, res) {
    db.Note.find({})
      res.json();
  },

  noteCreate: function(req, res) {
    db.Note.create({})
      res.json();
  },

  noteRemove: function(req, res) {
    db.Note.remove({})
      res.json();
  },

};
