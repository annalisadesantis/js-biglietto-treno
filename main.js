
// Domande all'utente

var kilometri = parseInt(prompt('Quanti kilometri percorrerai?'));

console.log(kilometri);

var età = parseInt(prompt('Quanti anni hai?'));

console.log(età);



// Calcolo kilometri maggiorenne

var prezzo = (kilometri * 0.21);

console.log(prezzo);


// Calcolo kilometri minorenne

var prezzomin = prezzo - (prezzo / 100 * 20);

console.log(prezzomin);


// Calcolo kilometri over

var prezzoover = prezzo - (prezzo / 100 * 40);

console.log(prezzoover);





// Calcolo età

var minorenne = (età < 18);

var maggiorenne = (età >= 18 && età <= 64);

var over = (età >= 65);





if (minorenne) {
    document.getElementById('prezzo').innerHTML = "Hai diritto ad uno sconto del 20% sul tuo biglietto : " + prezzomin + " € ";
} else if (maggiorenne) {
    document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di : " + prezzo + " € ";
} else{
    document.getElementById('prezzo').innerHTML = "Hai diritto ad uno sconto del 40% sul tuo biglietto : " + prezzoover + " € ";
}
