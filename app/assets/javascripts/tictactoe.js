var player = function() {
  return turn % 2 ? 'O' : 'X';
  //X turn if even, O if odd
}

var updateState = function(square) {
  $(square).text(player());
}

var setMessage = function(string) {
  $('#message').text(string);
}
