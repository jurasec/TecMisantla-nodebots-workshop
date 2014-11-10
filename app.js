var five = require('johnny-five'),
    board,
    led;

board = new five.Board();

board.on('ready', function() {
  console.log('Board ready for fun!');

  console.log(process.argv[0], process.argv[1]);

  led = new five.Led({
    pin: process.argv[2] || 13
  });

  this.repl.inject({
    led: led
  });

});