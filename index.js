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
const adaugareTitluLista = document.getElementById('adaugareTitluLista');
const adaugareTitluContract = document.getElementById('adaugareTitluContract');
const stergeDinLista = document.getElementById('stergeDinLista');
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
// Produse noi //
const produseDiv = document.querySelector('.produse');
const produseNoiTextarea = document.getElementById('produseNoi');
const listaProduse = document.getElementById('listaProduse');
const adaugare = document.getElementById('adaugare');
const adaugareContract = document.getElementById('adaugareContract');
// Pentru stergerea produselor //
const paragraph = document.querySelector('.produse > p');
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
// Delete produs button
const stergereProdus = document.getElementById('stergereProdus');

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
// Functie pentru titlul procesului in lista
function addNewTitle() {
  const nwTitle = titluArea.value.trim();
  const nwProTlt = document.createElement('option');
  nwProTlt.textContent = nwTitle;
  titluNou.appendChild(nwProTlt);
  saveOptionsToLocalStorage();
  titluArea.value = '';
}
// Functie pentru titlul procesului din lista in contract
function titluNouInContract() {
  const titluNouDinListaInContract = titluNou.value;
  titluProces.innerHTML = titluNouDinListaInContract;
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
// Functie pentru a adauga produse in lista de produse//
function addNewProduct() {
  const newProductText = produseNoiTextarea.value.trim();
  const newP = document.createElement('option');
  newP.textContent = newProductText;
  listaProduse.appendChild(newP);
  produseNoiTextarea.value = ''; // Clear the textarea
}
// Functie pentru a adauga produs in contract
function prdNouContract() {
  const newPrdContract = listaProduse.value.trim();
  const newParDiv = document.createElement('p');
  newParDiv.textContent = newPrdContract;
  produseDiv.appendChild(newParDiv);
  // Functie pentru stergerea produselor//
  newParDiv.addEventListener('click', () => {
    produseDiv.removeChild(newParDiv);
  });
}
// Functie pentru salvarea optiunilor in memoria locala

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
// Function to save all options in the select element to local storage
function saveOptionsToLocalStorage() {
  const options = Array.from(titluNou.options).map(
    (option) => option.textContent
  );
  localStorage.setItem('titluNouOptions', JSON.stringify(options));
}

// Function to load options from local storage when the page loads
function loadOptionsFromLocalStorage() {
  const savedOptions = JSON.parse(
    localStorage.getItem('titluNouOptions') || '[]'
  );

  titluNou.innerHTML = ''; // Clear any existing options to avoid duplicates

  savedOptions.forEach((optionText) => {
    const option = document.createElement('option');
    option.textContent = optionText;
    titluNou.appendChild(option);
  });
}

// Call the function to load options on page load
window.addEventListener('load', loadOptionsFromLocalStorage);

//
//
//
//
//
//
// Function to remove the selected option from the select element and local storage
function removeSelectedOption() {
  const selectedOption = titluNou.value; // Get the value of the selected option
  //if (!selectedOption) {
  //alert('Please select an option to delete!');
  //return;
  //}
  // Remove the selected option from the select element
  const options = Array.from(titluNou.options).filter(
    (option) => option.value !== selectedOption
  );
  titluNou.innerHTML = ''; // Clear all options
  options.forEach((option) => titluNou.appendChild(option)); // Re-add remaining options
  // Update local storage
  const updatedOptions = options.map((option) => option.textContent);
  localStorage.setItem('titluNouOptions', JSON.stringify(updatedOptions));
}
//
//
//
//
//
//
//
//
//
// ADD DIN LISTA DE PROD IN LOCAL STORAGE
// Function to save all products in the select element to local storage
function saveProductsToLocalStorage() {
  const products = Array.from(listaProduse.options).map(
    (option) => option.textContent
  );
  localStorage.setItem('listaProduseOptions', JSON.stringify(products));
}

// Function to add a new product to the list
function addNewProduct() {
  const newProductText = produseNoiTextarea.value.trim();
  if (!newProductText) {
    alert('Please enter a product!');
    return;
  }
  const newOption = document.createElement('option');
  newOption.textContent = newProductText;
  listaProduse.appendChild(newOption);
  saveProductsToLocalStorage(); // Save the updated list
  produseNoiTextarea.value = ''; // Clear the input field
}

// Function to load products from local storage when the page loads
function loadProductsFromLocalStorage() {
  const savedProducts = JSON.parse(
    localStorage.getItem('listaProduseOptions') || '[]'
  );

  listaProduse.innerHTML = ''; // Clear any existing options to avoid duplicates

  savedProducts.forEach((productText) => {
    const option = document.createElement('option');
    option.textContent = productText;
    listaProduse.appendChild(option);
  });
}

// Call the function to load products on page load
window.addEventListener('load', loadProductsFromLocalStorage);

// Add an event listener to the button for adding new products
//
//
//
//
//
//
//
//
//
//
// Function to remove the selected option from the listaProduse element and update local storage
function removeSelectedProduct() {
  const selectedProduct = listaProduse.value; // Get the value of the selected option
  /*if (!selectedProduct) {
    alert('Please select a product to delete!');
    return;
  }*/
  // Remove the selected option from the select element
  const products = Array.from(listaProduse.options).filter(
    (option) => option.value !== selectedProduct
  );
  listaProduse.innerHTML = ''; // Clear all options
  products.forEach((option) => listaProduse.appendChild(option)); // Re-add remaining options
  // Update local storage
  const updatedProducts = products.map((option) => option.textContent);
  localStorage.setItem('listaProduseOptions', JSON.stringify(updatedProducts));
}
//
//
//
//
//
//
//
//
//
//
//
// Functie pentru a pastra local optiunile
/*titluNou.addEventListener('change', () => {
  localStorage.setItem('titluNouOptions', titluNou.innerHTML);
});
window.onload = () => {
  const savedOptions = localStorage.getItem('titluNouOptions');
  if (savedOptions) {
    titluNou.innerHTML = savedOptions;
  }
};*/

/* function nwMentiuni() {
  const newMentiuni = mentiuniNou.value;
  mentiuni.innerHTML = newMentiuni;
  mentiuni.style.color = 'black';
}*/

stergereProdus.addEventListener('click', removeSelectedProduct);
stergeDinLista.addEventListener('click', removeSelectedOption);
adaugareTitluLista.addEventListener('click', addNewTitle);
adaugare.addEventListener('click', addNewProduct);
adaugareContract.addEventListener('click', prdNouContract);
save.addEventListener('click', () => {
  /*const inputs = document.querySelectorAll('#inputsForm input');

  // Check if all fields are filled
  for (let input of inputs) {
    if (!input.value.trim()) {
      // Check if field is empty or whitespace
      alert('Please fill in all fields.');
      return; // Stop the function
    }
  }*/

  nrProiecte();
  tltProiect();
  nmBeneficiar();
  nwData();
  nwObiect();
  nwCategorie();
  nwOcazie();
  nwPlanse();
  nwElement();
  nwMentiuni();
  titluNouInContract();
});
