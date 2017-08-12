
sentButton.click(function () {
  var token = tokenInput.val();
  var fid = fidInput.val();
  var lid = lidInput.val();
  var rid = ridInput.val();

  $.ajax({
    url: gachi + "/request/list/sent",
    method: 'GET',
    data:
    {
    },
    headers:
    {
      authorization: 'Bearer ' + token
    },
    success: function (results) {
      console.log('sent list successful + ' + JSON.stringify(results));

      $('#requests').empty();
      _.map(results, createNewItem);
      $('#tokenc').val(token);
    }
  });
});

