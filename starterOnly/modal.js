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
var quantity = document.getElementById('quantity');
var checkTerms = document.getElementById('checkbox1');
const city1 = document.getElementById('location1');
const city2 = document.getElementById('location2');
const city3 = document.getElementById('location3');
const city4 = document.getElementById('location4');
const city5 = document.getElementById('location5');
const city6 = document.getElementById('location6');

var first_missing = document.getElementById('first_missing');
var last_missing = document.getElementById('last_missing');
var errorEmail = document.getElementById('errorEmail');
var errorBirthdate = document.getElementById('errorBirthdate');
var errorParticipation = document.getElementById('errorParticipation');
var errorCity = document.getElementById('errorCity');
var errorCondition = document.getElementById('errorCondition');

const emailValidTypo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const numberTypo = /^[0-9]+$/; 


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
    errorEmail.textContent = "Renseignez votre email";
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
    errorBirthdate.textContent = "Renseignez votre date de naissance";
  }else{
    errorBirthdate.textContent = "";
    isValid = true;
  }
  return isValid;
}


//function validation number tournament
function tournamentValidation() {
  var isValid = false;
  if (quantity.validity.valueMissing){
    errorParticipation.textContent = "Indiquez un nombre de participation";
  }else if (numberTypo.test(quantity.value) == false){
    errorParticipation.textContent = "Utilisez uniquement des nombres";
  }else{
    errorParticipation.textContent = "";
    isValid = true;
  }
  return isValid;
}


//function validation city
function cityValidate() {
  var isValid = false;
  var auMoinsUneVilleSelectionnee = city1.checked || city2.checked || city3.checked || city4.checked || city5.checked || city6.checked;
  if (quantity.value >= 1 && auMoinsUneVilleSelectionnee == false) {
    errorCity.textContent = "Cochez au moins une case";
  }else{
    errorCity.textContent = "";
    isValid = true;
  }
  return isValid;
}


//function validation terms od uses
function termsValidation() {
  var isValid = false;
  if (checkTerms.checked == false){
    console.log('no valid');
    errorCondition.textContent = "Acceptez les conditions d'utilisation";
  }else{
    errorCondition.textContent = "";
    isValid = true;
    console.log('valid');
  }
  return isValid;
}





