var displayMessage = document.querySelector('.message');
var button = document.querySelector('.btn');
var counter = 0;
var input = document.querySelector('.input');

function removeAfterSetTime() {
  location.reload();
}

button.addEventListener('click', () => {
  var input = document.querySelector('.input').value.toLowerCase();
  var split = input.split('');
  input.value = '';

  // check 5 vowels
  for (var i = 0; i < split.length; i++) {
    if (
      split[i] == 'a' ||
      split[i] == 'e' ||
      split[i] == 'i' ||
      split[i] == 'o' ||
      split[i] == 'u'
    ) {
      counter++;
    }
    if (counter > 1) {
      displayMessage.innerHTML = `${input} has ${counter} vowels`;
    } else {
      displayMessage.innerHTML = `${input} has ${counter} vowel`;
    }
    var timeout = setTimeout(removeAfterSetTime, 4000);
  }
});
