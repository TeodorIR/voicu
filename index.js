const titlu = document.getElementById('titluProces');
const titluNou = document.getElementById('titluNou');
const save = document.getElementById('save');

save.addEventListener('click', () => {
  const nume = titluNou.value;
  titlu.innerHTML = nume;
  titlu.style.color = 'black';
});
