var gachi = 'http://localhost:3003/api/v1';

var tokenInput = $('#token');
var fidInput = $('#fid');
var createButton = $('#create');
var listButton = $('#list');
var tokenDiv = $('#tokenc');
var leadroomDiv = $('#leadrooms');


function createNewItem(leadroomEl) {
  /*
      leadroom_id: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
      // status: { type: ENUM(['open', 'closed']), defaultValue: 'open' },
      max_follower: { type: INTEGER },
      lead_from: { type: DATE },
      lead_until: { type: DATE },
      age: { type: STRING },
      characteristic: { type: STRING },
      location: { type: STRING },
      detail: { type: STRING(1000) },
       */

  var lidEl = document.createElement("p");
  lidEl.textContent = leadroomEl.leadroom_id;
  lidEl.className = 'lid';

  var num_follower = document.createElement("p");
  num_follower.textContent = leadroomEl.max_follower;

  var fromEl = document.createElement("p");
  fromEl.textContent = leadroomEl.lead_from;

  var untilEl = document.createElement("p");
  untilEl.textContent = leadroomEl.lead_until;

  var detailEl = document.createElement("p");
  detailEl.textContent = leadroomEl.detail;

  var locationEl = document.createElement("p");
  locationEl.textContent = leadroomEl.location;

  var ageEl = document.createElement("p");
  ageEl.textContent = leadroomEl.age;

  var characteristicEl = document.createElement("p");
  characteristicEl.textContent = leadroomEl.characteristic;

  var wrapper = document.createElement('div');
  wrapper.className = 'leadroom';
  wrapper.setAttribute("id", leadroomEl.lid);
  wrapper.append(ageEl);
  wrapper.append(locationEl);
  wrapper.append(fromEl);
  wrapper.append(untilEl);
  wrapper.append(detailEl);
  wrapper.append(lidEl);
  wrapper.append(num_follower);
  wrapper.append(characteristicEl);

  $('#leadrooms').append(wrapper);
};