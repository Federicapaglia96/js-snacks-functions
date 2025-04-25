/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
 function StartWith (array, lettera) {
    const risultato= [];
    for(let i =0; i<array.length; i++){
        if(lettera.toLowerCase()==array[i][0].toLowerCase()) {
            risultato[risultato.length]=array[i]
        }
        
    }
    return risultato;
 }


// Invoca la funzione qui e stampa il risultato in console
const risultato= StartWith(names, 'a');


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(risultato)