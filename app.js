var five = require('johnny-five'),
    board,
    led;

board = new five.Board();

board.on('ready', function() {
  console.log('Board ready for fun!');

  led = new five.Led.RGB({
    pins: {
      red: 9,
      green: 10,
      blue: 11
    }
  });

  this.repl.inject({
    led: led
  });

  led.on();
  led.color('#FF0000');

});