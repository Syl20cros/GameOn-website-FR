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
function displayMainModal() {
  modalbg.classList.add('bground-show');
}

// Close modal
function hideMainModal() {
  modalbg.classList.remove('bground-show');
}


////////////////////////////////////////////////////
/////////////////// form entries ///////////////////
////////////////////////////////////////////////////

//////// variables and constants /////////
const validation = document.getElementById('bt_valid');

const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const checkTerms = document.getElementById('checkbox1');
const city1 = document.getElementById('location1');
const city2 = document.getElementById('location2');
const city3 = document.getElementById('location3');
const city4 = document.getElementById('location4');
const city5 = document.getElementById('location5');
const city6 = document.getElementById('location6');

let first_missing = document.getElementById('first_missing');
let last_missing = document.getElementById('last_missing');
let errorEmail = document.getElementById('errorEmail');
let errorBirthdate = document.getElementById('errorBirthdate');
let errorParticipation = document.getElementById('errorParticipation');
let errorCity = document.getElementById('errorCity');
let errorCondition = document.getElementById('errorCondition');

const emailValidTypo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const numberTypo = /^[0-9]+$/; 

let firstIsValid;
let lastIsValid;
let emailIsValid;
let birthdateIsValid;
let numberTounementIsValid;
let cityIsValid;
let termsIsValid;


let registration = document.getElementById('registrationOk');

//Launch verification on click
validation.addEventListener('click', functionValidation);


//function validation
function functionValidation(e){

  e.preventDefault();

  validerPrenom();

  validerNom();

  emailValidation();

  birthValidation();

  tournamentValidation();

  cityValidate();

  termsValidation();

  if(firstIsValid && emailIsValid && birthdateIsValid && numberTounementIsValid && cityIsValid && termsIsValid == true){
    console.log('c est tout bon')
    modalbg.classList.remove('bground-show');
    registration.classList.add('registrationOk-show');
  }else{
    console.log('not good');
    
  }
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
  firstIsValid = false;
  var domInput = document.getElementById(fieldName);
  var domMessage = document.getElementById(fieldName+'_missing');
  if (domInput.validity.valueMissing){
    domMessage.textContent = message;
    domInput.classList.add('borderError');
  }else if (domInput.value.length <= 1){
    domMessage.textContent = "2 caractères minimum";
    domInput.classList.add('borderError');
  }else{
    domMessage.textContent = "";
    firstIsValid = true;
    domInput.classList.remove('borderError')
  }
  return firstIsValid;
}


//function validation email
function emailValidation() {
  emailIsValid = false;
  if (email.validity.valueMissing){
    errorEmail.textContent = "Renseignez votre email";
    email.classList.add('borderError');
  }else if (emailValidTypo.test(email.value) == false){
    errorEmail.textContent = "Format email non valide";
    email.classList.add('borderError');
  }else{
    errorEmail.textContent = "";
    emailIsValid = true;
    email.classList.remove('borderError');
  }
  return emailIsValid;
}


//function validation birdh date
function birthValidation() {
  birthdateIsValid = false;
  if (birthdate.validity.valueMissing){
    errorBirthdate.textContent = "Renseignez votre date de naissance";
    birthdate.classList.add('borderError');
    return false;
  }
  errorBirthdate.textContent = "";
  birthdate.classList.remove('borderError');
  birthdateIsValid = true;
  return birthdateIsValid;
}


//function validation number tournament
function tournamentValidation() {
  numberTounementIsValid = false;
  if (quantity.validity.valueMissing){
    errorParticipation.textContent = "Indiquez un nombre de participation";
    quantity.classList.add('borderError');
  }else if (numberTypo.test(quantity.value) == false){
    errorParticipation.textContent = "Utilisez uniquement des nombres";
    quantity.classList.add('borderError');
  }else{
    errorParticipation.textContent = "";
    numberTounementIsValid = true;
    quantity.classList.remove('borderError');
  }
  return numberTounementIsValid;
}


//function validation city
function cityValidate() {
  cityIsValid = false;
  var auMoinsUneVilleSelectionnee = city1.checked || city2.checked || city3.checked || city4.checked || city5.checked || city6.checked;
  if (quantity.value >= 1 && auMoinsUneVilleSelectionnee == false) {
    errorCity.textContent = "Cochez au moins une case";
    return false; 
  }
  errorCity.textContent = "";
  cityIsValid = true;
  return cityIsValid;
}


//function validation terms od uses
function termsValidation() {
  termsIsValid = false;
  if (checkTerms.checked == false){
    errorCondition.textContent = "Acceptez les conditions d'utilisation";
    return false; 
  }
  errorCondition.textContent = "";
  termsIsValid = true;
  return termsIsValid;
}

////////////////////////////////////////////////////
///////////// close WINDOW VALIDATION //////////////
////////////////////////////////////////////////////

const closeValidBtn = document.getElementById('btn-closeRegistrationOk');

// Call function closeModal when X pressed
closeValidBtn.addEventListener('click', hideWindowValidation);

// Close window
function hideWindowValidation() {
  console.log('cliclic')
  registration.classList.add('registrationOk-hide');
}
