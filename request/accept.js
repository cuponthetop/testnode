
acceptButton.click(function () {
  var token = tokenInput.val();
  var fid = fidInput.val();
  var lid = lidInput.val();
  var rid = ridInput.val();

  $.ajax({
    url: gachi + "/request/" + rid + "/accept",
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
      console.log('leadroom accept successful + ' + JSON.stringify(results));
    }
  });
});

