var colorInput = document.querySelector('input[type = color]');

io = io.connect();

colorInput.onchange = function() {
  var colorValue = this.value;
  console.log('color: ', colorValue);

  /* Emitimos el evento colorChange, para notificar al servidor. */
  io.emit('colorChange', {color: colorValue}); 
}