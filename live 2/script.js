// tester si le fichier JS est bien lié au fichier html
// alert("Fichier lié")

// *****************************************************

// fonction "incluse" en Js = fonctions natives
// alert = nom de la fonction
// () = appeler / lancer une fonction
// à l'intérieur de () on passe des arguments/ paramètres

// FONCTIONS POUR DEBUGGER
// console = objet natif JS
// log = fonction liée à cet objet
console.log("Fichier lié")
console.warn("je suis un avertissement")
console.error("je suis une erreur")

// *****************************************************

// ECRIRE UNE FONCTION
// méthode classique (ES5): 
function addition() {
    // code qui appartient à ma fonction "addition"
}
addition()   // appeler la fonction

// Méthode ES6 - Fat-arrow = la grosse flèche "=>" = fonction fléchée
const soustraction = () => {
    // code qui appartient à ma fonction "soustraction"
}
soustraction()

// Dire bonjour
const sayHello = (name, familyName) => {     
    // name existe uniquement ici entre mes {} => variable locale
    console.log("Bonjour " + name + " " + familyName)
    console.log("Bonjour", name, familyName)
    console.log(`Bonjour ${name} ${familyName}`)  // à privilégier : interpolation de variables
}
const firstName = "Ophélie"
const lastName = "THOMAS"
sayHello(firstName, lastName)

// ******************************************************