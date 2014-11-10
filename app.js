var five = require('johnny-five'),
    express = require('express.io'),
    path = require('path'),
    app = express(),
    board,
    led;

app.http().io();
app.use(express.static(path.join(__dirname, 'public')));

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


app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});