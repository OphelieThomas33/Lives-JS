// CONDITIONS :
// PSEUDO CODE (code tranduit en français) : Si.... ou si.... sinon....
// CODE : if ... if else ... else

const age = prompt("Quel âge avez-vous ?")   // le prompt se transforme tjs en chaine de caractères
// variables s'affichent dans des couleurs différentes selon leur type
console.log('âge en number Int', parseInt(age))   // entier même si on rentre un nombre décimal
console.log('âge en number Float', parseFloat(age))  // nombre décimal possible



const isNotANumber = isNaN(age)
console.log('isNotANumber', isNotANumber)

// si âge n'est pas un nombre
if ( isNotANumber ) {     // ou if (isNaN(age)) sans avoir besoin de faire la const isNotANumber
    console.log('Age donné n\'est pas un nombre')
}
// si la personne est mineure
else if ( age < 18 ) {
    // alors 
    console.log('est mineur')
}
// sinon la personne est majeure
else {
    // alors tu fais ça
    console.log('est majeur')
}

// **************************************************
// Les conditions peuvent se faire avec un switch case

// **************************************************
// Ternaire : syntaxe raccourcie pour faire des if else quand on enregsitre une valeur
// const isDarkModeOn = true
// let backgroundColor = null
// if (isDarkModeOn) {
//     backgroundColor = "black"
// } else {
//     backgroundColor = "white"
// }

// peut aussi s'écrire pour être raccourci
// const isDarkModeOn = true
// let backgroundColor = null
// if (isDarkModeOn) backgroundColor = "black"
// else backgroundColor = "white"

// peut encore être simplifié avec le ternaire
// const backgroundColor = "if === true" ? "si oui alors ça" : "sinon ça" 
const backgroundColor = isDarkModeOn ? "black" : "white"
