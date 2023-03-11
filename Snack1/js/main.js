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
        peso: 9
    },

    {
        nome: 'mtb',
        peso: 20
    },

    {
        nome: 'elettrica',
        peso: 10
    },

    {
        nome: 'citybike',
        peso: 15
    }
];

let biciPiuLeggera = biciclette[0];

for (let i = 0; i < biciclette.length; i++) {

    if (biciclette[i].peso < biciPiuLeggera.peso) {
        biciPiuLeggera = biciclette[i];
    }
}

// Ricavo il nome e il peso con destructuring

const {nome, peso} = biciPiuLeggera;

containerDom.innerHTML = `<h1>La bicicletta più leggera è la ${biciPiuLeggera.nome} con un peso di ${biciPiuLeggera.peso} kg.</h1>`;

console.log(biciPiuLeggera);