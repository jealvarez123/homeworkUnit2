console.log("Sanity Check: JS is working!");
var $beersList;
var allBeers = [];

$(document).ready(function(){

  $beersList = $('#beerTarget');
  $.ajax({
    method: 'GET',
    url: '/api/beers',
    success: handleSuccess,
    error: handleError
  });

  $('#newBeerForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/beers',
      data: $(this).serialize(),
      success: newBeerSuccess,
      error: newBeerError
    });
  });

  $beersList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/beers/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/beers/'+$(this).attr('data-id'),
      success: deleteBeerSuccess,
      error: deleteBeerError
    });
  });

});

function getBeerHtml(beer) {
  return `<hr>
          <p>
            <b>${beer.title}</b>
            by ${beer.type}
            <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${book._id}>Delete</button>
          </p>`;
}

function getAllBeersHtml(books) {
  return beers.map(getBeerHtml).join("");
}

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $beersList.empty();

  // pass `allBeers` into the template function
  var beersHtml = getAllBeersHtml(allBeers);

  // append html to the view
  $beersList.append(beersHtml);
};

function handleSuccess(json) {
  allBeers = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#beerTarget').text('Failed to load beers, is the server working?');
}

function newBeerSuccess(json) {
  $('#newBeerForm input').val('');
  allBeers.push(json);
  render();
}

function newBeerError() {
  console.log('newbeer error!');
}

function deleteBeerSuccess(json) {
  var beer = json;
  console.log(json);
  var beerId = beer._id;
  console.log('delete beer', beerId);
  // find the beer with the correct ID and remove it from our allBeers array
  for(var index = 0; index < allBooks.length; index++) {
    if(allBeers[index]._id === beerId) {
      allBeers.splice(index, 1);
      break;  // we found our beer - no reason to keep searching (this is why we didn't use forEach)
    }
  }
  render();
}

function deleteBeerError() {
  console.log('deletebeer error!');
}
