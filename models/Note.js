var mongoose = require("mongoose");

var Schema = mongoose.Schema;
console.log("Schema:" + Schema);

var noteSchema = new Schema({

  articleID: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  },
  body: {
    type: String
  },
  

});

var Note = mongoose.model("Note", noteSchema);
module.exports = Note;
