console.log("Bienvenue sur le site ");
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
const modalBtnClose = document.querySelector(".close"); 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log (" Ouverture de la fenetre d'inscription ");
  

}
// close modal form
function closeModal () {
  console.log("closeModal la fenetre d'inscription vient d'être fermée  ") ;

  modalbg.style.display = "none";
  
  
}
modalBtnClose.addEventListener("click" , closeModal );

/////////////////////////////////////////////////////////////////////////////

//fonction appellant les autres fonctions du formulaire 
function isFormValid() {
  isFirstNameValid()
  isLastNameValid()
  isEmailValid()
  
 
  return isFirstNameValid() && isLastNameValid() && isEmailValid()  ;
}

//Validation du Formulaire 
document.getElementById("formData")
    .addEventListener("submit", function (event) {
        event.preventDefault() //permet de rendre inactif l'evenement 
        if (isFormValid ()) {
            closeModal()
            
            console.log("Formulaire Validé")
            document.getElementById("formData").reset(); // permet de reinitialiser le formulaire apres validation 
            
            return true
            
        } else {
            console.log("Problème formulaire , entré invalide ")
            return false
        }
    })

//Form Control
const firstName = document.getElementById("firstName")
const lastName1 = document.getElementById("lastName")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const quantity = document.getElementById("quantity")
const locations = document.getElementsByClassName("location")
const generalCondition = document.getElementById("checkbox1")
const checkbox2 = document.getElementById("checkbox2");



// Regex pour la gestion de l'email et du nom et prénom
let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let regexFirstAndLastName = /^[a-z ,.'-]+$/i


// Messages d'erreur personnalisés pour chaque conformité d'entrée
const messagesErrors = {
  firstNameError_1: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  firstNameError_2: "Seul l'alphabet est accepté",
  lastNameError_1: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  lastNameError_2: "Seul l'alphabet est accepté",
  emailError_1: "Veuillez entrer une adresse mail valide",
  birthdateError_1: "Veuillez entrer une date de naissance",
  birthdateError_2 : "Vous devez être majeur pour participer à cet évènement",
  participateTournamentsError: "Veuillez entrer un nombre",
  locationError: "Veuillez sélectionner une ville",
  generalConditionError: "Vous devez accepter les condition générales pour continuer"
}



// je vérifie que le contenu de l'entrée prénom comporte plus de deux caractères,
//puis je m'assure qu'il ne comporte aucun caractère spécial, si tout est bon,
// Je valide la saisie de l'utilisateur

function isFirstNameValid() {
  if (firstName.value.length < 2) {
      let firstNameErrorMessage = document.getElementById("firstNameError");
      firstNameErrorMessage.innerHTML = messagesErrors.firstNameError_1
      firstNameErrorMessage.style.color = "red"
      firstNameErrorMessage.style.fontSize = "1rem"
      firstName.style.border = "2px solid red";
      console.log (" Affiche le message d'avertissement Prénom  ");
      return false;
    } else if (!regexFirstAndLastName.test(firstName.value)) {
      let firstNameErrorMessage = document.getElementById("firstNameError");
      firstNameErrorMessage.innerHTML = messagesErrors.firstNameError_2
      firstNameErrorMessage.style.color = "red"
      firstNameErrorMessage.style.fontSize = "1rem"
      firstName.style.border = "2px solid red";
      console.log (" Prénom invalide , alphabet non autorisé  ");
      return false;
  } else {
      let firstNameErrorMessage = document.getElementById("firstNameError");
      firstNameErrorMessage.innerHTML = ""
      firstNameErrorMessage.style.color = "green"
      firstName.style.border = "2px solid green";
      console.log (" Prénom validé  ");
      return true;
  }
}

firstName.addEventListener("click", isFirstNameValid );

function isLastNameValid() {
  if (lastName.value.length < 2) {
      let lastNameErrorMessage = document.getElementById("lastNameError");
      lastNameErrorMessage.innerHTML = messagesErrors.lastNameError_1
      lastNameErrorMessage.style.color = "red"
      lastNameErrorMessage.style.fontSize = "1rem"
      lastName.style.border = "2px solid red";
      console.log (" Affiche le message d'avertissement Nom  ");
      return false;
  } else if (!regexFirstAndLastName.test(lastName.value)) {
      let lastNameErrorMessage = document.getElementById("lastNameError");
      lastNameErrorMessage.innerHTML = messagesErrors.lastNameError_2
      lastNameErrorMessage.style.color = "red"
      lastNameErrorMessage.style.fontSize = "1rem"
      lastName.style.border = "2px solid red";
      console.log (" Nom invalide , alphabet non autorisé  ");
      return false;
  } else {
      let lastNameErrorMessage = document.getElementById("lastNameError")
      lastNameErrorMessage.innerHTML = ""
      lastNameErrorMessage.style.color = "green"
      lastName.style.border = "2px solid green";
      console.log (" Nom validé  ");
      return true;
  }
}

lastName.addEventListener("click" , isLastNameValid );

//Je m'assure que l'entrée de l'utilisateur est conforme à la regex,
// si c'est le cas, j'accepte l'entrée de l'utilisateur



function isEmailValid(){
  if(regexEmail.test(email.value) === false){
      let emailErrorMessage = document.getElementById("emailError");
      emailErrorMessage.innerHTML = messagesErrors.emailError_1
      emailErrorMessage.style.color = "red"
      emailErrorMessage.style.fontSize = "1rem"
      email.style.border = "2px solid red";
      console.log ("Email non conforme  ");
      return false;
  } else {
      let emailErrorMessage = document.getElementById("emailError");
      emailErrorMessage.innerHTML = ""
      emailErrorMessage.style.color = "green"
      email.style.border = "2px solid green";
      console.log ("Email conforme");
      return true
  }
}

email.addEventListener("click" , isEmailValid  );