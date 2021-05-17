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


/////////////// Open and close Modal ///////////////

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", displayMainModal));

// Call function closeModal when X pressed
modalX.addEventListener('click', displayMainModal);

//Add or remove the bground class// 
function displayMainModal() {
  if (modalbg.classList.contains('bground--show')) {
    modalbg.classList.remove('bground--show');
  }
  else {
    modalbg.classList.add('bground--show');
  }
}
