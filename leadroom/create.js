
createButton.click(function () {
  var token = tokenInput.val();
  var fid = fidInput.val();

  $.ajax({
    url: gachi + "/leadroom",
    method: 'POST',
    data:
    {
      fid: fid,
      max_follower: 5,
      from: new Date(Date.now()).toISOString(),
      until: (new Date(Date.now() + 3600*60*60*60)).toISOString(),
      age: 'age',
      characteristic: 'characteristic',
      location: 'location',
      detail: 'detail asdawef',
    },
    headers:
    {
      authorization: 'Bearer ' + token
    },
    success: function (results) {
      console.log('leadroom create successful + ' + JSON.stringify(results));

      $('#tokenc').val(token);
    }
  });
});

