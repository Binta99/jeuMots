let button = document.getElementById('button');
let Letexte = document.getElementById('texte');
let link = document.getElementById('link');
let form = document.getElementById('form');

const secretNumber = Math.floor(Math.random() * 100);

let atteinte = 2;
button.onclick = function () {
  const input = document.getElementById('input');
  if (input.value != '') {
    if (input.value < secretNumber) {
      Letexte.innerText =
        'Le nombre est plus grand que' + ' ' + input.value + '';
      Letexte.style.color = '#999';
      Letexte.style.fontWeight = 'bold';
    } else if (input.value > secretNumber) {
      Letexte.innerText =
        'Le nombre est plus petit que' + ' ' + input.value + '';
      Letexte.style.color = '#999';
      Letexte.style.fontWeight = 'bold';
    }
    if (atteinte == 0) {
      Letexte.innerText =
        'Vous avez perdu, il fallait trouvé ' + ' ' + secretNumber + '';
      Letexte.style.color = 'red';
      Letexte.style.fontWeight = 'bold';
      form.style.display = 'none';
      link.style.display = 'flex';
    }
    atteinte--;

    if (input.value == secretNumber) {
      Letexte.innerText =
        'Bravo! Vous avez gagné. Le nombre est bien ' + ' ' + secretNumber + '';
      Letexte.style.color = 'green';
      Letexte.style.fontWeight = 'bold';
      form.style.display = 'none';
      link.style.display = 'flex';
    }
  } else {
    Letexte.innerText = 'Le champ est vide!';
    Letexte.style.color = 'red';
    Letexte.style.fontWeight = 'bold';
  }
};
