
cancelButton.click(function () {
  var token = tokenInput.val();
  var fid = fidInput.val();
  var lid = lidInput.val();
  var rid = ridInput.val();

  $.ajax({
    url: gachi + "/request/" + rid + "/cancel",
    method: 'PATCH',
    data:
    {
      lid: lid
    },
    headers:
    {
      authorization: 'Bearer ' + token
    },
    success: function (results) {
      console.log('request cancel successful + ' + JSON.stringify(results));
    }
  });
});

