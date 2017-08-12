
rejectButton.click(function () {
  var token = tokenInput.val();
  var fid = fidInput.val();
  var lid = lidInput.val();
  var rid = ridInput.val();

  $.ajax({
    url: gachi + "/request/" + rid + "/refuse",
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
      console.log('request reject successful + ' + JSON.stringify(results));
    }
  });
});

