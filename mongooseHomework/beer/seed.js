Address// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var beers_list = [
  {
    title: "Thirsty Goat",
    brewery: "
Thirsty Planet Brewing Company",
    image: "",
    Address: "8201 S Congress Ave, Austin, TX 78745"
  },
  {
    title: "Stash",
    brewery: "Independence Brewing Co.",
    image: "",
    Address: "3913 Todd Ln #607, Austin, TX 78744"
  },
  {
    title: "Chico",
    brewery: "St. Elmo Brewing Company",
    image: "",
    Address: "440 E St Elmo Rd G-2, Austin, TX 78745"
  },
  {
    title: "512 IPA",
    brewery: "(512) Brewing Company",
    image: "",
    Address: "407 Radam Ln, Austin, TX 78745"
  },
  {
    title: "SALUTATION ALE",
    brewery: "Orf Brewing",
    image: "",
    Address: "4700 Burleson Rd f, Austin, TX 78744"
  },
  {
    title: "SPIRIT ANIMAL– SOUR PALE ALE",
    brewery: "Blue Owl Brewing",
    image: "",
    Address: "2400 E Cesar Chavez St #300, Austin, TX 78702"
  },
  {
    title: "Hell Yes",
    brewery: "The ABGB",
    image: "",
    Address: "1305 W Oltorf St, Austin, TX 78704"
  },
  {
    title: "A Pale Mosaic",
    brewery: "Hops and Grain Brewing",
    image: "http://www.hopsandgrain.com/wp-content/uploads/2017/03/pale-mosaic.png",
    Address: "507 Calles St #101, Austin, TX 78702"
  }
];

// remove all records that match {} -- which means remove ALL records
db.Beer.remove({}, function(err, beers){
  if(err) {
    console.log('Error occurred in remove', err);
  } else {
    console.log('removed all beers');

    // create new records based on the array beers_list
    db.Beer.create(beers_list, function(err, beers){
      if (err) { return console.log('err', err); }
      console.log("created", beers.length, "beers");
      process.exit();
    });
  }
});
