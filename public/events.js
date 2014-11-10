var colorInput = document.querySelector('input[type = color]');

io = io.connect();

colorInput.onchange = function() {
  var colorValue = this.value;
  console.log('color: ', colorValue);

  io.emit('colorChange', {color: colorValue});
}