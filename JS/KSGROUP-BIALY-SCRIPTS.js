const body = document.body;
const svg = document.getElementById('KSGROUP-BIALY-WEKTOR-SVG');

// Funkcja resetująca efekt
function resetEffect() {
    body.classList.remove('hover-active');
    if (svg) {
        svg.style.filter = 'brightness(0)';
    }
}

// Funkcja aktywująca efekt
function activateEffect() {
    body.classList.add('hover-active');
    if (svg) {
        svg.style.filter = 'brightness(1) invert(1)';
    }
}

// Reakcja na dotyk na urządzeniach mobilnych
if (svg) {
    svg.addEventListener('touchstart', function () {
        if (body.classList.contains('hover-active')) {
            resetEffect();
        } else {
            activateEffect();
        }
    });

    // Reakcja na najechanie myszką
    body.addEventListener('mouseover', function () {
        activateEffect();
    });

    // Reakcja na opuszczenie kursora
    body.addEventListener('mouseout', function () {
        resetEffect();
    });
}
