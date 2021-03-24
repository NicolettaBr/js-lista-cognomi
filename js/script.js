//chiedi all’utente il cognome
//inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
//stampa la lista ordinata alfabeticamente
//scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova (facciamo questo in 2 versioni: col ciclo for e col while)

//chiedere all'utente il proprio cognome (stringa)
var cognomeUtente = prompt('Dimmi il tuo cognome');
//console.log(cognomeUtente);

//crea array con altri cognomi in ordine alfabetico
var listaCognomi = [
    'rossi',
    'berrettoni',
    'tini',
    'napolitano',
    'bianchi'
];
//console.log(listaCognomi);

//listaCognomi.sort();
//console.log(listaCognomi);

//inserisci cognome chiesto nell' array
listaCognomi.push(cognomeUtente);
//console.log(listaCognomi);

//stampa dell'array in ordine alfabetico + cognome inserito dall' utente
listaCognomi.sort();
console.log(listaCognomi);

for ( var i = 0; i < listaCognomi.length; i++){
    var questoCognome = listaCognomi[i];
    //console.log(questoCognome);
    var contenutoUl = document.getElementById('lista-cognomi').innerHTML;
    //console.log(contenutoUl);
    document.getElementById('lista-cognomi').innerHTML = contenutoUl + '<li>' + questoCognome + '</li>';

}

/*
//creo ciclo FOR per scorrere la lista aggiornata

var cognomeTrovato;

for ( var i = 0; i < listaCognomi.length; i++){
    var questoCognome = listaCognomi[i];
    //console.log(questoCognome);

    if (questoCognome == cognomeUtente){
        cognomeTrovato = i + 1 ;
        //console.log(cognomeTrovato);
    }
}

//stampa
alert("Il tuo cognome all' interno della lista è " + cognomeTrovato );
*/

//creo ciclo WHILE per scorrere la lista aggiornata
var cognomeTrovato;

var i = 0;
while ( i < listaCognomi.length ){
    var questoCognome = listaCognomi[i];
    //console.log(questoCognome);

    if (questoCognome == cognomeUtente){
        cognomeTrovato = i + 1 ;
        //console.log(cognomeTrovato);
    }

    i++;
}

//stampa
alert("Il tuo cognome all' interno della lista è " + cognomeTrovato );