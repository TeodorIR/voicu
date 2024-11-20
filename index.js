const numePagina = document.getElementById('numePagina');
const numeInput = document.getElementById('nume');
const save = document.getElementById('save');

save.addEventListener('click', () => {
  const nume = numeInput.value;
  numePagina.innerHTML = nume;
});
