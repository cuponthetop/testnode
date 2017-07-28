function setLoggedIn() {

  emailInput.val("");
  passwordInput.val("");
  nicknameInput.val("");

  registerButton.hide();
  loginButton.hide();
  emailInput.hide();
  passwordInput.hide();
  nicknameInput.hide();

  postButton.show();
  textInput.show();
}

loginButton.click(function () {

  var email = emailInput.val();
  var password = passwordInput.val();

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (result) {
      console.log('login successful + ' + JSON.stringify(result));

      setLoggedIn();

      username = result.displayName;
      return result.getIdToken();
    })
    .then(function (token) {
      var tokenText = document.createElement("p");
      tokenText.textContent = JSON.stringify(token);

      $("#token").append(tokenText);

      // Begin listening for data
      startListening(token);
    });
});


var startListening = function (token) {
  room.on('child_added', function (snapshot) {
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
}