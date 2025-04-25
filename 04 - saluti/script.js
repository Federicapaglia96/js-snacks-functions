/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */
const name= "mario"

// Dichiara la funzione qui.

function StrName(nome) {
    return " ciao " + nome;
}

// Invoca la funzione qui e stampa il risultato in console
const saluto = StrName(name)
console.log(saluto)


//Risultato atteso se si passa 'Mario': // ciao Mario