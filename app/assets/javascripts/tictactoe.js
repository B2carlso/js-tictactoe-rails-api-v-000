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

var checkWinner = function() {
   const WIN_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  var board = {};
  var winner = false;
  $('td').text((index, square) => board[index] = square);
   WIN_COMBOS.forEach(function(combo) {
    if (board[combo[0]] == board[combo[1]] && board[combo[0]] == board[combo[2]] && board[combo[0]] != "") {
      winner = true;
      setMessage(`Player ${board[combo[0]]} Won!`);
    }
  });
  return winner;
};
