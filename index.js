// NR proiect
const nrProiectOne = document.getElementById('nrProiectOne');
const nrProiectTwo = document.getElementById('nrProiectTwo');
const nrProiectThree = document.getElementById('nrProiectThree');
const numarProiect = document.getElementById('numarProiect');
// Titlu proiect
const titluProiect = document.getElementById('titluProiect');
const titluDeProiect = document.getElementById('titluDeProiect');
// Beneficiar
const beneficiar = document.getElementById('beneficiar');
// Save button
const save = document.getElementById('save');

// Functie pentru Nr proiecte
function nrProiecte() {
  const nrOneNew = numarProiect.value;
  const nrTwoNew = numarProiect.value;
  const nrThreeNew = numarProiect.value;
  nrProiectOne.innerHTML = nrOneNew;
  nrProiectOne.style.color = 'black';
  nrProiectTwo.innerHTML = nrTwoNew;
  nrProiectTwo.style.color = 'black';
  nrProiectThree.innerHTML = nrThreeNew;
  nrProiectThree.style.color = 'black';
}

// Functie pentru Titlul proiectului
function tltProiect() {
  const tltNew = titluDeProiect.value;
  titluProiect.innerHTML = tltNew;
  titluProiect.style.color = 'black';
}

save.addEventListener('click', () => {
  nrProiecte();
  tltProiect();
});
