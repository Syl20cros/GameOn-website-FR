function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalX = document.getElementById("close");

////////////////////////////////////////////////////
/////////////// Open and close Modal ///////////////
////////////////////////////////////////////////////

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", displayMainModal));

// Call function closeModal when X pressed
modalX.addEventListener('click', hideMainModal);

// Open modal
function displayMainModal(event) {
  modalbg.classList.add('bground--show');
}

// Close modal
function hideMainModal(event) {
  modalbg.classList.remove('bground--show');
}


////////////////////////////////////////////////////
/////////////////// form entries ///////////////////
////////////////////////////////////////////////////


var validation = document.getElementById('bt_valid');

var first = document.getElementById('first');
var last = document.getElementById('last');
var email = document.getElementById('email');
var birthdate = document.getElementById('birthdate');

var first_missing = document.getElementById('first_missing');
var last_missing = document.getElementById('last_missing');
var errorEmail = document.getElementById('errorEmail');
var errorBirthdate = document.getElementById('errorBirthdate');

var emailValidTypo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


//Launch verification on click
validation.addEventListener('click', functionValidation);


//function validation
function functionValidation(e){

  e.preventDefault();

  validerPrenom();

  validerNom();

  emailValidation();

  birthValidation();

}


//function validation first name
function validerPrenom() {

  validerChampText('first', 'Prénom manquant')

}


//function validation last name
function validerNom() {

  validerChampText('last', 'Nom manquant')

}

//function validation text last and first name
function validerChampText(fieldName, message) {
  var isValid = false;
  var domInput = document.getElementById(fieldName);
  var domMessage = document.getElementById(fieldName+'_missing');
  if (domInput.validity.valueMissing){
    domMessage.textContent = message;
  }else if (domInput.value.length <= 1){
    domMessage.textContent = "2 caractères minimum";
  }else{
    domMessage.textContent = "";
    isValid = true;
  }
  return isValid;
}


//function validation email
function emailValidation() {
  var isValid = false;
  if (email.validity.valueMissing){
    errorEmail.textContent = "Veuillez renseigner votre email";
  }else if (emailValidTypo.test(email.value) == false){
    errorEmail.textContent = "Format email non valid";
  }else{
    errorEmail.textContent = "";
    isValid = true;
  }
  return isValid;
}


//function validation birdh date
function birthValidation() {
  var isValid = false;
  if (birthdate.validity.valueMissing){
    errorBirthdate.textContent = "Veuillez renseigner votre date de naissance";
  }else{
    errorBirthdate.textContent = "";
    isValid = true;
  }
  return isValid;
}

