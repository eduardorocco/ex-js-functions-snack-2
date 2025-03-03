// 🏆 Snack 1
// Crea una funzione che somma due numeri.


function sum(a,b){
    
    return a+b
}

console.log(sum(3,4));

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile


const sum2 = function (a,b){
    return a+b
}

console.log(sum2(5,6));

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const sum3 = (a,b) => a+b

console.log(sum3(7,8));

// 🏆 Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const square =(a) => a*a

console.log(square(9))

// 🏆 Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const somma = (a,b) => a+b
const sottrazione = (a,b) => a-b
const moltiplicazione = (a,b) => a*b
const divisione = (a,b) => a/b

function eseguiOperazione(a,b,operatore){
    return operatore(a,b)
}

console.log(eseguiOperazione(10,5,somma))
console.log(eseguiOperazione(10,5,sottrazione))
console.log(eseguiOperazione(10,5,moltiplicazione))
console.log(eseguiOperazione(10,5,divisione))

// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function creaTimer(time){
    return function(){
        setTimeout(() => console.log("Tempo scaduto!"), time)
    }
}

const timer = creaTimer(5000)
timer() 

// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

// function stampaOgniSecondo(messaggio){
//     setInterval(() => {
//         console.log(messaggio)
//     },1000)
// }

// stampaOgniSecondo("Ciao")


// 🏆 Snack 6
// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(time){
    let count = 0
    return function(){
        setInterval(() => {
            count++
            console.log(count)
        },time)
    }
}
// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEferma(messaggio, start, stop){
    let timer = setInterval(() => {
        console.log(messaggio)
    }, start)

    setTimeout(() => {
        clearInterval(timer)
    }, stop)
}