function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


////////////////////////////////////////////////////
/////////////// Open and close Modal ///////////////
////////////////////////////////////////////////////

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalX = document.getElementById("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", displayMainModal));

// launch closeModal envent when X pressed
modalX.addEventListener('click', hideMainModal);

// Open modal
function displayMainModal() {
  modalbg.classList.add('bground-show');
}

// Close modal
function hideMainModal() {
  modalbg.classList.remove('bground-show');
  resetInput();
}


////////////////////////////////////////////////////
/////////////////// form entries ///////////////////
////////////////////////////////////////////////////

//////// variables and constants /////////
const validation = document.getElementById('bt_valid');
const registration = document.getElementById('registrationOk');

const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const quantity = document.getElementById('quantity');
const checkTerms = document.getElementById('checkbox1');
const checkEvents = document.getElementById('checkbox2');
const city1 = document.getElementById('location1');
const city2 = document.getElementById('location2');
const city3 = document.getElementById('location3');
const city4 = document.getElementById('location4');
const city5 = document.getElementById('location5');
const city6 = document.getElementById('location6');

const first_missing = document.getElementById('first_missing');
const last_missing = document.getElementById('last_missing');
const errorEmail = document.getElementById('errorEmail');
const errorBirthdate = document.getElementById('errorBirthdate');
const errorParticipation = document.getElementById('errorParticipation');
const errorCity = document.getElementById('errorCity');
const errorCondition = document.getElementById('errorCondition');

const emailValidTypo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const numberTypo = /^[0-9]+$/; 


//Launch verification on click
validation.addEventListener('click', functionValidation);


//function validation
function functionValidation(e) {

  e.preventDefault(); //stop default action to not close the modal

  validerPrenom();

  validerNom();

  emailValidation();

  birthValidation();

  tournamentValidation();

  cityValidate();

  termsValidation();

  if(validerPrenom() && validerNom() && emailValidation() && birthValidation() && tournamentValidation() && cityValidate() && termsValidation() == true) {
    modalbg.classList.remove('bground-show'); //close modal
    registration.classList.add('registrationOk-show'); //open message inscription OK
    resetInput();
  }
}


//function validation first name
function validerPrenom() {
  
  if (first.validity.valueMissing){
    first_missing.textContent = "Prenom manquant";
    first.classList.add('borderError');
  } else if (first.value.trim().length <= 1) {
    first_missing.textContent = "2 caractères minimum";
    first.classList.add('borderError');
  } else {
    first_missing.textContent = "";
    first.classList.remove('borderError')
    return true;
  }
}


//function validation last name
function validerNom() {
  
  if (last.validity.valueMissing){
    last_missing.textContent = "Nom manquant";
    last.classList.add('borderError');
  } else if (last.value.trim().length <= 1) {
    last_missing.textContent = "2 caractères minimum";
    last.classList.add('borderError');
  } else {
    last_missing.textContent = "";
    last.classList.remove('borderError')
    return true;
  }
}


//function validation email
function emailValidation() {
  if (email.validity.valueMissing) {
    errorEmail.textContent = "Renseignez votre email";
    email.classList.add('borderError');
  }else if (emailValidTypo.test(email.value) == false) {
    errorEmail.textContent = "Format email non valide";
    email.classList.add('borderError');
  } else {
    errorEmail.textContent = "";
    email.classList.remove('borderError');
    return true;
  }
}


//function validation birdh date
function birthValidation() {
  if (birthdate.validity.valueMissing){
    errorBirthdate.textContent = "Renseignez votre date de naissance";
    birthdate.classList.add('borderError');
    return false;
  } 
  errorBirthdate.textContent = "";
  birthdate.classList.remove('borderError');
  return true;
}


//function validation number tournament
function tournamentValidation() {
  if (quantity.validity.valueMissing) {
    errorParticipation.textContent = "Indiquez un nombre de participation";
    quantity.classList.add('borderError');
  } else if (numberTypo.test(quantity.value) == false) {
    errorParticipation.textContent = "Utilisez uniquement des nombres";
    quantity.classList.add('borderError');
  } else {
    errorParticipation.textContent = "";
    quantity.classList.remove('borderError');
    return true;
  }
}


//function validation city
function cityValidate() {
  var auMoinsUneVilleSelectionnee = city1.checked || city2.checked || city3.checked || city4.checked || city5.checked || city6.checked;
  if (quantity.value >= 1 && auMoinsUneVilleSelectionnee == false) {
    errorCity.textContent = "Cochez au moins une case"; 
    return false;
  }
  errorCity.textContent = "";
  return true;
}


//function validation terms od uses
function termsValidation() {
  if (checkTerms.checked == false) {
    errorCondition.textContent = "Veuillez accepter les conditions d'utilisation";
    return false;
  }
  errorCondition.textContent = "";
  return true;
}


////////////////////////////////////////////////////
///////////// close WINDOW VALIDATION //////////////
////////////////////////////////////////////////////

const closeValidBtn = document.getElementById('btn-closeRegistrationOk');


// Call function closeModal when X pressed
closeValidBtn.addEventListener('click', hideWindowValidation);


// Close window
function hideWindowValidation() {
  registration.classList.add('registrationOk-hide');
}



////////////////////////////////////////////////////
/////////////// reset du formulaire ////////////////
////////////////////////////////////////////////////
function resetInput(){
  first.value = "";
  last.value = "";
  email.value = "";
  birthdate.value = "";
  quantity.value = "";
  checkTerms.checked = false;
  checkEvents.checked = false;
  city1.checked = false;
  city2.checked = false;
  city3.checked = false;
  city4.checked = false;
  city5.checked = false;
  city6.checked = false;
  first_missing.textContent = "";
  last_missing.textContent = "";
  errorEmail.textContent = "";
  errorBirthdate.textContent = "";
  errorParticipation.textContent = "";
  errorCity.textContent = "";
  errorCondition.textContent = "";
  first.classList.remove('borderError');
  last.classList.remove('borderError');
  email.classList.remove('borderError');
  birthdate.classList.remove('borderError');
  quantity.classList.remove('borderError');
}