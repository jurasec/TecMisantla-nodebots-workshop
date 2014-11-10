var five = require('johnny-five'),
    board,
    led;

board = new five.Board();

board.on('ready', function() {
  console.log('Board ready for fun!');

});