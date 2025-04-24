/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const word2= 'ciao'
const word3= 'hello'


// Dichiara la funzione qui.

function numeroVocali(parola) {
    let contatore = 0;
    for (let i = 0; i < parola.length; i++) {
        if (parola[i] == 'a' || parola[i] == 'e' || parola[i] == 'i' || parola[i] == 'o' || parola[i] == 'u') {
            contatore = contatore + 1;
        }
           
    }
      return contatore;
}

// Invoca la funzione qui e stampa il risultato in console

const risultato = numeroVocali(word)
const risultato2= numeroVocali(word2)
const risultato3= numeroVocali(word3)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log (risultato);
console.log(risultato2);
console.log(risultato3)