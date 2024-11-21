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
const numeBeneficiar = document.getElementById('numeBeneficiar');
// Titlul procesului
const titluProces = document.getElementById('titluProces');
const titluNou = document.getElementById('titluNou');
// Data
const dataProiect = document.getElementById('dataProiect');
const data = document.getElementById('data');
// Obiect
const obiect = document.getElementById('obiect');
const obiectNou = document.getElementById('obiectNou');
// Categorie lucrari
const categorieLucrari = document.getElementById('categorieLucrari');
const categorieNou = document.getElementById('categorieNou');
// Ocazie verificare
const ocazie = document.getElementById('ocazie');
const ocazieNou = document.getElementById('ocazieNou');
// Numar plasa
const nrPlanse = document.getElementById('nrPlanse');
const numarPlansaNou = document.getElementById('numarPlansaNou');
// Element reper
const elementul = document.getElementById('elementul');
const elementNou = document.getElementById('elementNou');
// Mentiuni
const mentiuni = document.getElementById('mentiuni');
const mentiuniNou = document.getElementById('mentiuniNou');
// Save button
const save = document.getElementById('save');

// Functie pentru Nr proiecte
function nrProiecte() {
  const nrOneNew = numarProiect.value;
  const nrTwoNew = numarProiect.value;
  const nrThreeNew = numarProiect.value;
  nrProiectOne.innerHTML = nrOneNew;
  nrProiectOne.style.color = 'black';
  nrProiectOne.style.fontWeight = 'bold';
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
  titluProiect.style.fontWeight = 'bold';
}
// Functie pentru nume beneficiar
function nmBeneficiar() {
  const newBeneficiar = numeBeneficiar.value;
  beneficiar.innerHTML = newBeneficiar;
  beneficiar.style.color = 'black';
  beneficiar.style.fontWeight = 'bold';
}
// Functie pentru titlul procesului
function nwTitle() {
  const newTitle = titluNou.value;
  titluProces.innerHTML = newTitle;
  titluProces.style.color = 'black';
}
// Functie pentru data
function nwData() {
  const [year, month, day] = data.value.split('-');
  dataProiect.innerHTML = `${day}.${month}.${year}`;
  dataProiect.style.color = 'black';
}
// Functie pentru obiect
function nwObiect() {
  const newObiect = obiectNou.value;
  obiect.innerHTML = newObiect;
  obiect.style.color = 'black';
}
// Functie pentru categorie lucrari
function nwCategorie() {
  const newCategorie = categorieNou.value;
  categorieLucrari.innerHTML = newCategorie;
  categorieLucrari.style.color = 'black';
}
// Functie pentru ocazie
function nwOcazie() {
  const newOcazie = ocazieNou.value;
  ocazie.innerHTML = newOcazie;
  ocazie.style.color = 'black';
}
// Functie pentru plansa
function nwPlanse() {
  const newPlanse = numarPlansaNou.value;
  nrPlanse.innerHTML = newPlanse;
  nrPlanse.style.color = 'black';
}
// Functie pentru element reper
function nwElement() {
  const newElement = elementNou.value;
  elementul.innerHTML = newElement;
  elementul.style.color = 'black';
}
// Functie pentru mentiuni
function nwMentiuni() {
  const newMentiuni = mentiuniNou.value;
  mentiuni.innerHTML = newMentiuni;
  mentiuni.style.color = 'black';
}

save.addEventListener('click', () => {
  const inputs = document.querySelectorAll('#inputsForm input');

  // Check if all fields are filled
  for (let input of inputs) {
    if (!input.value.trim()) {
      // Check if field is empty or whitespace
      alert('Please fill in all fields.');
      return; // Stop the function
    }
  }

  nrProiecte();
  tltProiect();
  nmBeneficiar();
  nwData();
  nwTitle();
  nwObiect();
  nwCategorie();
  nwOcazie();
  nwPlanse();
  nwElement();
  nwMentiuni();
});
