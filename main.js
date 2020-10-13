
// Domande all'utente

var kilometri = parseInt(prompt('Quanti kilometri percorrerai?'));

console.log(kilometri);

var età = parseInt(prompt('Quanti anni hai?'));

console.log(età);

// Calcolo kilometri

var totkm = (kilometri * 0.21);

console.log(totkm);

// Calcolo età

if (età < 18) {
    console.log("sei minorenne");
} else if (età >= 18 && età <= 64) {
    console.log("sei maggiorenne");
} else{
    console.log("sei over");
}
