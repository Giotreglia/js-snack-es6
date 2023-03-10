// Snack 1

/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando 
destructuring e template literal.
*/

// Elementi del Dom

const containerDom = document.getElementById('container');

// Creo array di oggetti biciclette

const biciclette = [
    {
        nome: 'gravel',
        peso: 12
    },

    {
        nome: 'mtb',
        peso: 10
    },

    {
        nome: 'elettrica',
        peso: 18
    },

    {
        nome: 'citybike',
        peso: 15
    }
];

let biciPiuLeggera;

for (let i = 0; i < biciclette.length; i++) {

    pesoBicicletta = biciclette[0].peso;

    if (biciclette[i].peso < pesoBicicletta) {
        biciPiuLeggera = biciclette[i];
    }
}

containerDom.innerHTML = `<h1>La bicicletta più leggera è la ${biciPiuLeggera.nome} con un peso di ${biciPiuLeggera.peso} kg.</h1>`;

console.log(biciPiuLeggera);