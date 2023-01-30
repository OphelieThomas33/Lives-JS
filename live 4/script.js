// Boucle for

// Pour toutes mes .... (valeurs)
// Pour chacun de ... (enfants)
// Pour tous mes nombres pairs / impairs
// Pour les 10 premiers ... (utilisateurs par ex)


// tableau = array
const colorsString = ["blue", "red", "green"]
const colorsInt = [1, 2, 3, 4]
console.log(colorsString)      // affiche tout le tableau
console.log(colorsString[0])   // affiche une valeur correspondant à l'index entre []
console.log("n'existe pas ", colorsString[100])

// Programme : calculer automatique une réduction de 50% sur les prix de mon magasin
const prices = [12.99, 13.5, 24, 159.90]
const pricesPromo = []

// pour tous mes prix :
// on commence à 0; jusqu'à l'index inférieur à 4 (taille du tableau); on incrémente de 1 à chaque tour
for (let index = 0; index < prices.length; index++ ) {
    const initialPrice = prices[index];
    const priceWithPromo = initialPrice/2;
    const historyPrice = {
        'initial': initialPrice,
        'reduction': priceWithPromo
    }
    pricesPromo.push(historyPrice)
}

console.log("Mes nouveaux prix sont :", pricesPromo)


// autre méthode :
// Tableau d'objets :
const shop = [
    {
        name: "Sac A",
        price: 99
    },
    {
        name: "Sac B",
        price: 149
    },
    {
        name: "Sac C",
        price: 169
    }
]

for (let index = 0; index < shop.length; index++){
    const priceWithPromo2 = shop[index].price / 2
    shop[index].promo = priceWithPromo2     // ajoute la propriété promo à nos objets
}
console.log(shop)
console.table(shop)   // tableau plus clair