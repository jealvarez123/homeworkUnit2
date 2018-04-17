var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var BrewerySchema = new Schema({
  name: String,
  location: String,
  image: String
});

var Brewery = mongoose.model('Brewery', BrewerySchema);

module.exports = Brewery;
