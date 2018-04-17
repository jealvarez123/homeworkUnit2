var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
     title: String,
     type: String,
     image: String,
     Address: String
    // you should fill the rest of this in
 });

var Beer = mongoose.model('Beer', BeerSchema);

module.exports = Beer;
