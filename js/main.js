//Chiedi all'utente un numero e di scegliere tra pari e dispari, somma il numero dell'utente con un numero da 1 a 5 casuale tramite una funzione e dichiara Se l'utente ha vinto o perso.
let oddoreven=prompt("Scegli tra pari e dispari");
let chosennumber= parseInt(prompt("Scegli un numero"));
let secondnumber= generateRandomNumberZeroToMaxNumber(5);
let somma= chosennumber + secondnumber;
let result= Checkoddorevendeclarewinorlose(somma, oddoreven);






// Funzione numeri randomici 
function generateRandomNumberZeroToMaxNumber (maxNumber) {
    let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    return randomNumber;
}


// funzione che controlla se il numero è pari o dispari e confrontarli con la scelta che gli abbiamo imposto con i prompt
function Checkoddorevendeclarewinorlose (number, or){
    if(number % 2 == 0 && or== "pari"){
        console.log("Hai vinto!")
    }
    else if(number % 2 == 0 && or== "dispari"){
        console.log("Hai perso");
    }
    else if (number % 2 != 0 && or == "pari"){
        console.log ("Hai perso")
    }
    else if(number % 2 != 0 && or == "dispari"){
        console.log("Hai vinto")
    }
    else {
        console.log("Riprova inserendo Ciò che ti è stato chiesto")
    }
};