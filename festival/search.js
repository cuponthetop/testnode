
searchButton.click(function () {
  var token = tokenInput.val();
  var term = termInput.val();

  $.ajax({
    url: gachi + "/festival/search",
    method: 'GET',
    data:
    {
      term: term
    },
    headers:
    {
      authorization: 'Bearer ' + token
    },
    success: function (results) {
      console.log('search successful + ' + JSON.stringify(results));

      $('#festivals').empty();
      _.map(results, createNewItem);
      $('#tokenc').val(token);
    }
  });
});

