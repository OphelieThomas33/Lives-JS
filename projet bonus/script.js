console.log('V1 : Mon dico anglais')

/*

MON PROGRAMME : 

> Je veux pouvoir donner la définition d'un mot à mes utilisateurs

- 1 - Récupérer le mot saisi par l'utilisateur
- 2 - Envoyer le mot à l'API ( https://dictionaryapi.dev/ )
- 3 - Récupérer le JSON (la donnée) en lien avec mon mot
- 4 - Afficher les infos de mon mot sur ma page (HTML)
- 5 - Ajouter un lecteur pour écouter la prononciation du mot

*/

// Etape 1 : Récupérer mon mot
const watchSubmit = () => {
    const form = document.querySelector("#form");   
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const data = new FormData(form)
        const wordToSearch = data.get("search")
        apiCall(wordToSearch)
    }) 
}

// Etape 2 : Envoyer le mot à l'API

const apiCall = (word) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
            // Etape 3 : récupérer les données
            const informationsNeeded = extractData(data[0])
            // Etape 4 : Ajouter les infos sur la page
            renderToHTML(informationsNeeded)
            console.log(informationsNeeded)
        })
        .catch(() => {
            alert('Le mot demandé n\'exsite pas')
            console.log('ERROR')
        })

        
}

const extractData = (data) => {
    // 1 - mot
    const word = data.word
    // 2 - phonétique
    const phonetics = findProps(data.phonetics, 'text')
    // 3 - prononciation(audio)
    const pronoun = findProps(data.phonetics, 'audio')
    // 4 - Définition(s)
    const meanings = data.meanings

    return {
        word: word,
        phonetic: phonetics,
        pronoun: pronoun,
        meanings: meanings
    }
}

const findProps = (array, name) => {
    // fonction qui parcourt un tableau d'objets
    for (const element of array) {
        // et cherche dans ce tableau si l'objet en cours contient une certaine propriété 
        const currentObject = element
        const hasProp = currentObject.hasOwnProperty(name)
        // alors elle renvoie cette propriété
        if (hasProp) {
            return currentObject[name]
        }
    }
}

const renderToHTML = () => {
    console.log('ajouter les infos sur la page')

}

// Lancement du programme : 
watchSubmit()