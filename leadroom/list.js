
listButton.click(function () {
  var token = tokenInput.val();
  var fid = fidInput.val();

  $.ajax({
    url: gachi + "/leadroom/list",
    method: 'GET',
    data:
    {
      fid: fid,
      page: 1
    },
    headers:
    {
      authorization: 'Bearer ' + token
    },
    success: function (results) {
      console.log('list successful + ' + JSON.stringify(results));

      $('#leadrooms').empty();
      _.map(results, createNewItem);
      $('#tokenc').val(token);
    }
  });
});

