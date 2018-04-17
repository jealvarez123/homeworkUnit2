var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/beers', function (req, res) {
  // send all beers as JSON response
  db.Beer.find(function(err, beers){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(beers);
  });
});

app.get('/api/beers', function (req, res) {
  // send all books as JSON response
  db.Beer.find(function(err, beers){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(beers);
  });
});

app.post('/api/beers', function (req, res) {
  // create new beer with form data (`req.body`)
  console.log('beers create', req.body);
  var newBeer = req.body;
  newBeer._id = newBeerUUID++;
  beers.push(newBeer);
  res.json(newBeer);
});

app.put('/api/beers/:id', function(req,res){
// get beer id from url params (`req.params`)
  console.log('beers update', req.params);
  var beerId = req.params.id;
  // find the index of the beer we want to remove
  var updateBeerIndex = beers.findIndex(function(element, index) {
    return (element._id === parseInt(req.params.id)); //params are strings
  });
  console.log('updating beer with index', deleteBeerIndex);
  var beerToUpdate = beers[deleteBeerIndex];
  beers.splice(updateBeerIndex, 1, req.params);
  res.json(req.params);
});

// delete beer
app.delete('/api/beers/:id', function (req, res) {
  // get beer id from url params (`req.params`)
  console.log('beers delete', req.params);
  var beerId = req.params.id;
  // find the index of the beer we want to remove
  var deleteBeerIndex = beers.findIndex(function(element, index) {
    return (element._id === parseInt(req.params.id)); //params are strings
  });
  console.log('deleting beer with index', deleteBeerIndex);
  var bookToDelete = beers[deleteBeerIndex];
  beers.splice(deleteBeerIndex, 1);
  res.json(beerToDelete);
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
