const titlu = document.getElementById('titlu');
const titluNou = document.getElementById('titluNou');
const save = document.getElementById('save');

save.addEventListener('click', () => {
  const nume = titluNou.value;
  titlu.innerHTML = nume;
});
