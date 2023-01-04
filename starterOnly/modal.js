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


// launch modal form (Ouverture de la fenetre d'inscription)
function launchModal() {
  modalbg.style.display = "block";
  formConfirmation.style.display = "none"

  console.log (" Ouverture de la fenetre d'inscription ");
  

}
// close modal form
function closeModal () {
  console.log("closeModal la fenetre d'inscription vient d'être fermée  ") ;
 modalbg.style.display = "none";
  
  
  
  
}
modalBtnClose.addEventListener("click" , closeModal ); // la fenetre d'inscription vient d'être fermée  au click 





/////////////////////////////////////////////////////////////////////////////

//fonction appellant les autres fonctions du formulaire 
// cette fonction appellera toutes les fonctions de vérification créées ci-dessus, chacune de ces fonctions renvoie une réponse booléenne.
// Si toutes ces fonctions sont vraies, tout le formulaire est correct, j'affiche le message de validation

function isFormValid() {
  isFirstNameValid()
  isLastNameValid()
  isEmailValid()
  isBirthdateValid()
  isBirthdateValid()
  isParticipateTournaments()
  isLocation()
  isGeneralCondition()
  
  

  return isFirstNameValid() && 
  isLastNameValid() &&
   isEmailValid() &&
    isBirthdateValid() &&
    isParticipateTournaments()&&
    isLocation()&&
    isGeneralCondition()

  
}

//Validation du Formulaire 
document.getElementById("formData")
    .addEventListener("submit", function (event) {
        event.preventDefault() //permet de rendre inactif l'evenement 
        if (isFormValid ()) { //si une fonction appelée isFormValid renvoie une valeur vraie.  le code à l'intérieur de "if " sera exécuté
            closeModal ()
            launchConfirmation()
            
           
            console.log("Formulaire Validé")
            document.getElementById("formData").reset(); // permet de reinitialiser le formulaire apres validation 
            
            return true
            
        } else {   // Sinon renvoie faux 
            console.log("Problème formulaire , entré invalide ")
            return false
        }
    })

//Form Control ( Dom Elements du formulaire )
const firstName = document.getElementById("firstName")
const lastName1 = document.getElementById("lastName")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const participateTournaments = document.getElementById("quantity")
const locations = document.getElementsByClassName("location")
const generalCondition = document.getElementById("checkbox1")
const formConfirmation = document.getElementById("formConfirmation")



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
  participateTournamentsError: "Veuillez entrer un nombre entre 0 et 99",
  locationError: "Veuillez sélectionner une ville",
  generalConditionError: "Vous devez accepter les condition générales pour continuer"
}



// je vérifie que le contenu de l'entrée prénom comporte plus de deux caractères,
//puis je m'assure qu'il ne comporte aucun caractère spécial, si tout est bon,
// Je valide la saisie de l'utilisateur

function isFirstNameValid() {
  if (firstName.value.trim().length < 2) {
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
  if (lastName.value.trim().length < 2) {
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

lastName1.addEventListener("click" , isLastNameValid );

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

// Je crée la variable now pour obtenir la date du jour, puis la variable currentYear pour obtenir l'année en cours.
// La première condition s'assure que l'entrée de date a été remplie, la seconde s'assure que l'utilisateur est majeur et moins de 100 ans .
// Si ces deux conditions sont remplies, j'accepte la saisie de l'utilisateur

function isBirthdateValid() {
  let now = new Date();
  let currentYear = now.getFullYear();
  console.log( currentYear)
  let registeredDate = new Date(birthdate.value)
  if (birthdate.value.length < 1) {
      let birthDateErrorMessage = document.getElementById("birthdateError");
      birthDateErrorMessage.innerHTML = messagesErrors.birthdateError_1
      birthDateErrorMessage.style.color = "red";
      birthDateErrorMessage.style.fontSize = "1rem"
      birthdate.style.border = "2px solid red"
      console.log("champs date de naissance avec au moins un elements vide ")
      return false
  } else if (currentYear - registeredDate.getFullYear() < 18 || currentYear - registeredDate.getFullYear() > 100 ) {
      let birthDateErrorMessage = document.getElementById("birthdateError");
      birthDateErrorMessage.innerHTML = messagesErrors.birthdateError_2
      birthDateErrorMessage.style.color = "red";
      birthDateErrorMessage.style.fontSize = "1rem"
      birthdate.style.border = "2px solid red"
      console.log( " erreur l'utilisateur n'as pas encore 18 ans ou depasse les 100 ans ")
      return false
  } else {
      let birthDateErrorMessage = document.getElementById("birthdateError");
      birthDateErrorMessage.innerHTML = ""
      birthDateErrorMessage.style.color = "green";
      birthdate.style.border = "2px solid green"
      console.log(" majeur approuvé  l'utilisateur peut s'incrire ")
      return true;
  }
}

birthdate.addEventListener("click" , isBirthdateValid  );

// Je m'assure que l'utilisateur a saisi un nombre supérieur à 0 avec un maximun  à 99 et que le champs soit non  vide , si oui, je valide sa saisie

function isParticipateTournaments() {
  
  if (participateTournaments.value < 0 || participateTournaments.value >= 100 || participateTournaments.value === "" || participateTournaments.value.includes(".")  ) {
      let participateTournamentsErrorMessage = document.getElementById("quantityError")
      participateTournamentsErrorMessage.innerHTML = messagesErrors.participateTournamentsError;
      participateTournamentsErrorMessage.style.color = "red";
      participateTournamentsErrorMessage.style.fontSize = "1rem";
      participateTournaments.style.border = "2px solid red"
      console.log(" l'utilisateur à entrée un chiffre non compris entre 0 et 99 ou sinon le champs est vide ")
      return false
    
  } else {
      let participateTournamentsErrorMessage = document.getElementById("quantityError")
      participateTournamentsErrorMessage.innerHTML = ""
      participateTournamentsErrorMessage.style.color = "green";
      participateTournaments.style.border = "2px solid green"
      return true
  }
}

participateTournaments.addEventListener("click" , isParticipateTournaments  );

// J'ai créé une variable incluant toutes les cases à cocher via une classe qu'elles ont toutes.
// Je fais une boucle pour voir si une de ces cases est cochée,
// si c'est le cas, je valide la saisie de l'utilisateur, sinon, j'affiche une erreur

function isLocation(){
  for (let i = 0; i < locations.length; i++) {
      if (locations[i].checked) {
          document.getElementById('locationError').innerHTML = "";
         
         
          return true;
      }
 } 
  let locationsErrorMessage = document.getElementById('locationError');
  locationsErrorMessage.innerHTML = messagesErrors.locationError;
  locationsErrorMessage.style.color = "red";
  locationsErrorMessage.style.fontSize = "1rem";
  return false;
}



// Je m'assure que l'utilisateur a vérifié les termes et conditions, sinon,
// j'affiche un message d'erreur, sinon je valide la saisie de l'utilisateur

function isGeneralCondition(){
  if (!generalCondition.checked){
      let generalConditionErrorMessage = document.getElementById("generalConditionError")
      generalConditionErrorMessage.innerHTML = messagesErrors.generalConditionError;
      generalConditionErrorMessage.style.color = "red";
      generalConditionErrorMessage.style.fontSize = "1rem";
      generalCondition.style.border = "2px solid red"
      return false
  } else {
      document.getElementById("generalConditionError").innerHTML = "";
      return true;
  }
}


function launchConfirmation() {
  formConfirmation.style.display = "block";
}

function closeConfirmation() {
  formConfirmation.style.display = "none";
}