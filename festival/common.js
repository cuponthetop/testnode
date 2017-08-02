var gachi = 'http://localhost:3003/api/v1';

var tokenInput = $('#token');
var termInput = $('#term');
var searchButton = $('#search');
var listButton = $('#list');
var tokenDiv = $('#tokenc');
var festivalDiv = $('#festivals');


function createNewItem(festivalEl) {

  var fidEl = document.createElement("p");
  fidEl.textContent = festivalEl.fid;
  fidEl.className = 'fid';

  var titleEl = document.createElement("p");
  titleEl.textContent = festivalEl.title;

  var fromEl = document.createElement("p");
  fromEl.textContent = festivalEl.from;

  var untilEl = document.createElement("p");
  untilEl.textContent = festivalEl.until;

  var detailEl = document.createElement("p");
  detailEl.textContent = festivalEl.detail;

  var locationEl = document.createElement("p");
  locationEl.textContent = festivalEl.location;

  var genreEl = document.createElement("p");
  genreEl.textContent = _.join(_.map(festivalEl.genres, (el) => { return el.genre; }), ', ');

  var imageEl = document.createElement("img");
  imageEl.setAttribute("src", "data:image/gif;base64," + festivalEl.image);


  var wrapper = document.createElement('div');
  wrapper.className = 'festival';
  wrapper.setAttribute("id", festivalEl.fid);
  wrapper.append(imageEl);
  wrapper.append(genreEl);
  wrapper.append(locationEl);
  wrapper.append(fromEl);
  wrapper.append(untilEl);
  wrapper.append(detailEl);
  wrapper.append(fidEl);
  wrapper.append(titleEl);

  $('#festivals').append(wrapper);
};