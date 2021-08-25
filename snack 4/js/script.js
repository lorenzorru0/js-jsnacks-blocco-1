//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa

function accessoInvitati() {
    // 1. Richiesta della mail dell'utente
    var emailUtente = document.getElementById("utente").value;
    console.log(utente);
    // 2. Dichiaro le email autorizzate
    var invitati = ["Lorenzo Orrù", "Samuele Madrigali"];
    // 3. Verifico che l'utente sia autorizzato
    var verifica = 0;
    for (var i = 0; i < invitati.length; i++) {
        console.log(invitati[i]);
        if (emailUtente == invitati[i]) {
            verifica++;
        }
    }
    // 4. Stampo all'utente il risultato
    if (verifica == 0) {
        document.getElementById("accesso").innerHTML = "Non puoi partecipare alla festa";
    } else {
        document.getElementById("accesso").innerHTML = "Puoi partecipare alla festa";
    }
}