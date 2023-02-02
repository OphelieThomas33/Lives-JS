// ancienne méthode pour interagir avec un élément (aussi utilisée en REACT): 
// intégrer les fonctions dans le HTML

// Infos diverses :
// quand on créé un attribut on les personnalise "data-nomDeMonNouvelAttribut"
// Si on utilise une classe dans le HTML pour lier le fichier JS on peut nommer : class="js-maClasse"

const clic = () => {
    console.log('Tu viens de cliquer sur le button')
}

// Nouvelle méthode :
// Récupérer un élément HTML
const myButton = document.querySelector('#myButton')
// cible.addEventListener('evenement écouté', 'fonction')
myButton.addEventListener('click', clic)


// Sélectionner un élément grâce à un attribut
const buttonData = document.querySelector("[data-myButton]")
console.log(buttonData)
buttonData.addEventListener('mouseenter', () => {
    console.log('Je survole mon bouton')
} )



const dots = document.querySelectorAll("[data-dot]")
const mySpan = document.querySelector("[data-number]")

console.log(dots)   // retourne un tableau et non un seul élément

// dots.addEventListener('click', clic)  => ne pourra pas fonctionner car dots est un tableau

// le e ou event dans les fonctions => function (e) ou function(event)
// va servir à obtenir de la data propre à l'évènement (ex : position de la souris lors du clic)
// ces datas pourront servir dans la fonction.
for (let index = 0; index < dots.length; index++) {
    dots[index].addEventListener('click', (event) => {
        const clickedDot = event.target;
        const number = clickedDot.getAttribute('data-dot')
        console.log("clic dot", number)
        mySpan.textContent = number
    })
}

const reset = document.querySelector('[data-reset]')
reset.addEventListener('click', () => {
    mySpan.innerHTML = ""
})