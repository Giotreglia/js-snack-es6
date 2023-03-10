// Snack 2

/*
    Creare un array di oggetti di squadre di calcio. 
    Ogni squadra avrà diverse proprietà: 
    nome, punti fatti, falli subiti.
    Nome sarà l’unica proprietà da compilare, 
    le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti.
    Infine usando la destrutturazione creiamo un nuovo array 
    i cui elementi contengono solo nomi e falli subiti 
    e stampiamo tutto in console.

*/

// Creo Array squadre
const squadre = [

    {
        nome: 'Inter',
        'punti fatti' : 0,
        'falli subiti' : 0
    },
    {
        nome: 'Napoli',
        'punti fatti' : 0,
        'falli subiti' : 0
    },
    {
        nome: 'Brescia',
        'punti fatti' : 0,
        'falli subiti' : 0
    },
    {
        nome: 'La Spezia',
        'punti fatti' : 0,
        'falli subiti' : 0
    }
]

console.log(squadre);



// Aggiungo numero random a punti fatti e falli subiti
squadre.forEach(elemento => {
    elemento["falli subiti"] = generaNumeroRandom(0, 100);
    elemento["punti fatti"] = generaNumeroRandom(0, 100);
});

// Creo nuovo array
let newSquadre = [...squadre];

newSquadre.forEach(elemento => {
    delete elemento["punti fatti"];
}) 

console.log(newSquadre); 






// Funzioni

function generaNumeroRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1) + min); 
    return numeroRandom;
}