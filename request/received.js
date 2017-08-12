
receivedButton.click(function () {
  var token = tokenInput.val();
  var fid = fidInput.val();
  var lid = lidInput.val();
  var rid = ridInput.val();

  $.ajax({
    url: gachi + "/request/list/received",
    method: 'GET',
    data:
    {
    },
    headers:
    {
      authorization: 'Bearer ' + token
    },
    success: function (results) {
      console.log('received list successful + ' + JSON.stringify(results));

      $('#requests').empty();
      _.map(results, createNewItem);
      $('#tokenc').val(token);
    }
  });
});

