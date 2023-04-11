
// Configuración de la ruleta
var wheel = new Winwheel({
    'numSegments': 1,
    'outerRadius': 150,
    'textFontSize': 24,
    'segments': [{'fillStyle': '#FFC107', 'text': ''}],
    'animation': {'type': 'spinToStop', 'duration': 5, 'spins': 8, 'callbackFinished': 'showWinner'}
});

// Función para agregar un nombre a la ruleta
$('#addNameBtn').click(function () {
    var name = $('#nameInput').val();
    if (name) {
        wheel.addSegment({'fillStyle': '#4CAF50', 'text': name});
        $('#nameInput').val('');
        $('#spinBtn').removeAttr('disabled');
    }
});

// Función para girar la ruleta
$('#spinBtn').click(function () {
    var numWinners = $('#numWinnersInput').val();
    var spinSpeed = $('#spinSpeedInput').val();
    if (numWinners && spinSpeed) {
        $('#spinBtn').attr('disabled', 'disabled');
        wheel.animation.spins = spinSpeed;
        wheel.animation.callbackFinished = function () {
            showWinners(numWinners);
        }
        wheel.startAnimation();
    }
});

// Función para mostrar los ganadores en un modal con confeti
function showWinners(numWinners) {
    var winners = wheel.getIndicatedSegments(numWinners);
    var modalBody = '';
    winners.forEach(function (segment) {
        modalBody += '<p><strong>' + segment.text + '</strong></p>';
    });
    $('#winnersModal .modal-body').html(modalBody);
    $('#winnersModal').modal('show');
    startConfetti();
}

// Función para mostrar el confeti
function startConfetti() {
    var confettiSettings = {target: 'confetti-canvas'};
    var confetti = new window.ConfettiGenerator(confettiSettings);
    confetti.render();
}

// Función para detener el confeti
function stopConfetti() {
    var confetti = window.confetti;
    if (confetti) {
        confetti.clear();
    }
}

// Función para mostrar el modal de ganadores y detener el confeti
function showWinner() {
    $('#winnersModal').modal('show');
    stopConfetti();
}