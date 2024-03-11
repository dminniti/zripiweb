// Función para actualizar el contador
function updateCountdown() {
    // Fecha objetivo: 6 de marzo de 2024 a las 15:00 horas, hora de Argentina
    const targetDate = new Date("March 12, 2024 23:59:59 GMT-0300");

    // Fecha actual
    const now = new Date();

    // Diferencia entre la fecha objetivo y la fecha actual en milisegundos
    const diff = targetDate - now;

    // Convertir la diferencia a horas, minutos y segundos
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Mostrar el resultado en el elemento con el id "countdown"
    document.getElementById("countdown").innerHTML = `
      ⏰️ Quedan ${hours} hs ${minutes} min ${seconds} seg para que finalice la promo ⏰ ️
    `;

    // Si ya pasó la fecha objetivo, ocultar el contador
    if (diff <= 0) {
        document.getElementById("countdown").style.display = "none";
    }
}

// Llamar a la función updateCountdown cada segundo
setInterval(updateCountdown, 1000);

// Llamar a la función una vez al cargar la página para mostrar el contador inmediatamente
updateCountdown();