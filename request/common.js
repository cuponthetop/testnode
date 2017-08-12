var gachi = 'http://localhost:3003/api/v1';

var tokenInput = $('#token');
var fidInput = $('#fid');
var lidInput = $('#lid');
var ridInput = $('#rid');

var acceptButton = $('#accept');
var rejectButton = $('#reject');
var cancelButton = $('#cancel');
var createButton = $('#create');
var receivedButton = $('#received');
var sentButton = $('#sent');

var tokenDiv = $('#tokenc');
var requestDiv = $('#requests');

function createNewItem(requestEl) {

  /**
   *
      rid: { type: UUID, primaryKey: true, defaultValue: UUIDV4 },
      status: { type: ENUM(['pending', 'accepted', 'rejected', 'canceled']) }
   */

  var ridEl = document.createElement("p");
  ridEl.textContent = requestEl.rid;
  ridEl.className = 'rid';

  var status = document.createElement("p");
  status.textContent = requestEl.status;

  var leadroomEl = document.createElement("p");
  leadroomEl.textContent = requestEl.leadroom;

  var requesterEl = document.createElement("p");
  requesterEl.textContent = requestEl.requester;

  var wrapper = document.createElement('div');
  wrapper.className = 'request';
  wrapper.setAttribute("id", requestEl.rid);
  wrapper.append(leadroomEl);
  wrapper.append(requesterEl);
  wrapper.append(ridEl);
  wrapper.append(status);

  $('#requests').append(wrapper);
};