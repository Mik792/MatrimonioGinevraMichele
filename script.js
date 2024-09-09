// Imposta il countdown per il 28 giugno 2025 alle 17:00
const countDownDate = new Date("Jun 28, 2025 17:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Aggiorna il timer nel sito
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // Se il countdown è terminato
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "L'evento è iniziato!";
    }
}, 1000);
