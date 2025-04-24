/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


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

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
console.log (risultato);