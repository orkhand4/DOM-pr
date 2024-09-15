const btnAdd_tag = document.querySelector('#btnAdd')
const btnRemove_tag = document.querySelector('#btnRemove')
const btnToggle_tag = document.querySelector('#btnToggle')
const h1_tag = document.querySelector('#txt')

btnAdd_tag.addEventListener('click', () => {
  h1_tag.classList.add('hakuna')
});

btnRemove_tag.addEventListener('click', () => {
  h1_tag.classList.remove('hakuna')
});

btnToggle_tag.addEventListener('click', () => {
  h1_tag.classList.toggle('hakuna')
});

