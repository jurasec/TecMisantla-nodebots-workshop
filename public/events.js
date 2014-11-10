var colorInput = document.querySelector('input[type = color]');

colorInput.onchange = function() {
  var colorValue = this.value;
  console.log('color: ', colorValue);
}