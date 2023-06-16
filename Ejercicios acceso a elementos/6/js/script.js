

var slider = document.getElementById('range');
var pElement = document.querySelector('p');
slider.addEventListener('input', function () {
    pElement.style.fontSize = this.value + 'px';
});