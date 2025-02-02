const errors = document.querySelectorAll('.error');
errors.forEach(error => {
  error.style.display = 'none';
})
let name;
let number;
if(document.querySelector('.note').innerText === 'Note: Registration Form for non participants'){
  document.querySelector('.name-notice').style.display = 'none';
}
function isAlphabet(str) {
  if(document.querySelector('.name-notice').style.display === 'none'){
    return /^[A-Za-z ]+$/.test(str);
  }
  return /^[A-Za-z 0-9]+$/.test(str);
}
setInterval(() => {
  name = document.querySelector('#name').value;
  number = document.querySelector('#number').value;
  console.log(number)
  if (!isAlphabet(name) && name !== '') {
    document.querySelector('.name-error').style.display = 'block';
  }
  else {
    document.querySelector('.name-error').style.display = 'none';
  }
  if (isNaN(number) && number !== null) {
    document.querySelector('.number-error').style.display = 'block';
  }
  else {
    document.querySelector('.number-error').style.display = 'none';
  }
  if (!(number <= 9899999999 && number >= 9700000000)&&number) {
    document.querySelector('.number-length-error').style.display = 'block';
  }
  else {
    document.querySelector('.number-length-error').style.display = 'none';
  }
}, 1000);

document.querySelector('#registration-form').addEventListener('submit', (e) => {
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let number = document.querySelector('#number').value;
  let org = document.querySelector('#organization').value;
  if (name === '' || email === '' || number === '' || org === '') {
    alert('All the field with * must be filled!');
    e.preventDefault();
  }
  let nameError = document.querySelector('.name-error').style.display;
  let numberError = document.querySelector('.number-error').style.display;
  let numberLengthError = document.querySelector('.number-length-error').style.display;
  if(nameError==='block'||numberError==='block'||numberLengthError==='block'){
    alert('Enter all the fields correctly!');
    e.preventDefault();
  }
})