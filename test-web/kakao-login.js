//<![CDATA[
// 사용할 앱의 JavaScript 키를 설정해 주세요.
Kakao.init('dcbd80630afb20bbf56754bd368d6d9f');
// 카카오 로그인 버튼을 생성합니다.
Kakao.Auth.createLoginButton({
  container: '#kakao-login-btn',
  success: function (authObj) {
    console.log('login successful + ' + JSON.stringify(authObj));

    var access = Kakao.Auth.getAccessToken();

    $.post(gachi + "/user/login", {
      provider: "kakao",
      access_token: access
    }, function (result1, status) {
      console.log('login successful + ' + JSON.stringify(result1));
      var token1 = result1.access_token;

      var tokenText = document.createElement("p");
      tokenText.textContent = JSON.stringify(token1);

      $("#token").append(tokenText);

      setLoggedIn();

      signInCustom(token1);

    }).fail(function (err) {
      console.log(JSON.stringify(err));

      console.log('creating new kakaotalk user');

      var nickname = nicknameInput.val();
      $.post(gachi + "/user", {
        nickname: nickname,
        provider: "kakao",
        access_token: access
      }, function (result2, status) {
        console.log('create successful + ' + JSON.stringify(result2));

        $.post(gachi + "/user/login", {
          provider: "kakao",
          access_token: access
        }, function (result3, status) {
          console.log('login successful + ' + JSON.stringify(result3));
          var token3 = result3.access_token


          setLoggedIn();
          signInCustom(token3);
        });
      });
    });
  },
  fail: function (err) {
    alert(JSON.stringify(err));
  }
});
//]]>

function setKakaoLoggedIn() {
  setLoggedIn();
  $('#kakao-login-btn').hide();
}

function signInCustom(token) {
  firebase.auth().signInWithCustomToken(token).then(function (res) {

    username = res.uid;
    return res.getIdToken();
  }).then(function (res) {

    var tokenText = document.createElement("p");
    tokenText.textContent = JSON.stringify(res);

    $("#token").append(tokenText);

    // Begin listening for data
    startListening(res);
  });
}