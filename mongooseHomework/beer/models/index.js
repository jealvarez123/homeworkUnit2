var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/beer-app");

module.exports.Book = require("./beer.js");
module.exports.Author = require("./brewery.js");
