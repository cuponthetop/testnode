
createButton.click(function () {
  var token = tokenInput.val();
  var fid = fidInput.val();
  var lid = lidInput.val();
  var rid = ridInput.val();

  $.ajax({
    url: gachi + "/request",
    method: 'POST',
    data:
    {
      lid: lid
    },
    headers:
    {
      authorization: 'Bearer ' + token
    },
    success: function (results) {
      console.log('request create successful + ' + JSON.stringify(results));

      $('#tokenc').val(token);
    }
  });
});

