/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function StrName(nome){
    const d = new Date();
    let hour = d.getHours();
    if(hour<=13){
        return "buongiorno " + nome
    } else if (hour<=17){
        return "buon pomeriggio " + nome
    } else {
        return "buona sera " + nome
    }

}


// Invoca la funzione qui e stampa il risultato in console
const saluto = StrName(name)
console.log(saluto)
 

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.