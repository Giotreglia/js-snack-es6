// Snack 3 Bonus

/*
    Scrivere una funzione che accetti tre argomenti, 
    un array e due numeri (a più piccolo di b).
    La funzione ritornerà un nuovo array con i valori 
    che hanno la posizione compresa tra i due numeri.
    Usiamo i nuovi metodi degli array foreach o filter.

*/

// Caso con numeri

const numeri = [1,2,3,4,5,6,7,8,9,10];

let newNumeri = compresoTra(numeri, 2, 10);

console.log(newNumeri);

// Funzione

function compresoTra(array, min, max) {
    let result = [];
    array.forEach(element => {
        if (element>=min && element<=max) {
            result.push(element);
        }
    });

    return result;
    
}

// Caso con parole

const lista = ['Brescia', 'Milano', 'Napoli', 'Palermo', 'Firenze', 'Roma'];

const newLista = indiceCompresoTra(lista, 4, 6);

console.log(newLista);

function indiceCompresoTra(array, a, b) {

    // verifico che b sia maggiore di a
    if (b < a) {
        return [];
    }
    // Creo nuovo array
    let result = [];


    array.forEach((element, index) => {

        if (index >=a && index <= b) {
            result.push(element);
        }
    });

    return result;
    
}
