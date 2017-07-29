var db = firebase.database();
var rooms = db.ref('chat');
var members = db.ref('chat/room1/members');
var messages = db.ref('chat/room1/msg');

postButton.click(function () {
  var msgUser = username;
  var msgText = textInput.val();
  messages.push({ userid: msgUser, username: msgUser, text: msgText, timestamp: Date.now()});

  textInput.val("");
});
