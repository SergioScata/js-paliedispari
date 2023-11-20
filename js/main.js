//Palindroma
//Chiedo all'utente di fornirci una parola
let chosenword = prompt("Inserisci una parola");
let reversedword= reverseString(chosenword);

if (chosenword == reversedword){
    console.log("La parola è palindroma.");
}
else{
    console.log("La parola non è palindroma.");
}



//Funzione per invertire la stringa
function reverseString(str) {
    return str.split("").reverse().join("");
}
















//Chiedi all'utente un numero e di scegliere tra pari e dispari, somma il numero dell'utente con un numero da 1 a 5 casuale tramite una funzione e dichiara Se l'utente ha vinto o perso.
let oddoreven=prompt("Scegli tra pari e dispari");
let chosennumber= parseInt(prompt("Scegli un numero tra 1 a 5"));
let secondnumber= generateRandomNumberZeroToMaxNumber(1, 5);
let somma= chosennumber + secondnumber;
let result= Checkoddorevendeclarewinorlose(somma, oddoreven);

// Funzione numeri randomici 
function generateRandomNumberZeroToMaxNumber (minnumber, maxNumber) {
    let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    return randomNumber;
}


// funzione che controlla se il numero è pari o dispari e confrontarli con la scelta che gli abbiamo imposto con i prompt
function Checkoddorevendeclarewinorlose (number, oddorevenchoice){
    if(number % 2 == 0 && oddorevenchoice== "pari"){
        console.log("Hai vinto!");
    }
    else if(number % 2 == 0 && oddorevenchoice== "dispari"){
        console.log("Hai perso");
    }
    else if (number % 2 != 0 && oddorevenchoice == "pari"){
        console.log ("Hai perso");
    }
    else if(number % 2 != 0 && oddorevenchoice == "dispari"){
        console.log("Hai vinto");
    }
    else {
        console.log("Riprova inserendo Ciò che ti è stato chiesto")
    }
};
