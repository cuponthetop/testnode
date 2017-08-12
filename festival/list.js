
listButton.click(function () {
  var token = tokenInput.val();

  $.ajax({
    url: gachi + "/festival/list",
    method: 'GET',
    data:
    {
      type: 'default',
      page: 1
    },
    headers:
    {
      authorization: 'Bearer ' + token
    },
    success: function (results) {
      console.log('list successful + ' + JSON.stringify(results));

      $('#festivals').empty();
      _.map(results, createNewItem);
      $('#tokenc').val(token);
    }
  });
});

