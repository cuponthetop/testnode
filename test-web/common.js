var gachi = 'http://localhost:3003/api/v1';

var emailInput = $('#email');
var passwordInput = $('#password');
var nicknameInput = $('#nickname');
var textInput = $('#text');
var postButton = $('#post');
var registerButton = $('#register');
var loginButton = $('#login');

var username = null;
postButton.hide();
textInput.hide();


var startListening = function (token) {
  messages.on('child_added', function (snapshot) {
    var msg = snapshot.val();
    console.log(JSON.stringify(msg));

    var msgemailElement = document.createElement("b");
    msgemailElement.textContent = msg.email;

    var msgTextElement = document.createElement("p");
    msgTextElement.textContent = msg.text;

    var msgElement = document.createElement("div");
    msgElement.append(msgemailElement);
    msgElement.append(msgTextElement);

    $("#results").append(msgElement);
  });

  members.on('child_added', function (snapshot) {
    var member = snapshot.val();
    console.log(JSON.stringify(member));

    var memberIDEl = document.createElement("b");
    memberIDEl.textContent = member.uid;

    var memberEl = document.createElement("div");
    memberEl.append(memberIDEl);

    $("#members").append(memberEl);
  });


  rooms.on('child_added', function (snapshot) {
    var room = snapshot.val();
    console.log(JSON.stringify(room));

    var roomIDEl = document.createElement("b");
    roomIDEl.textContent = room.id;

    var roomMemberEl = document.createElement("p");
    roomMemberEl.textContent = room.members;

    var roomEl = document.createElement("div");
    roomEl.append(roomIDEl);
    roomEl.append(roomMemberEl);

    $("#rooms").append(roomEl);
  });

}