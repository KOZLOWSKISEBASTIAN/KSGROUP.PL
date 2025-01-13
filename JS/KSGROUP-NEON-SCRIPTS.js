const body = document.body;
const svg = document.getElementById('KSGROUP-BIALY-SVG');

// Funkcja resetująca efekt
function resetEffect() {
    body.classList.remove('hover-active');
    svg.style.filter = 'brightness(0)';
}


function activateEffect() {
    body.classList.add('hover-active');
    svg.style.filter = 'brightness(1) invert(23%) sepia(198%) saturate(5000%) hue-rotate(300deg)';
}

// Reakcja na dotyk na urządzeniach mobilnych
svg.addEventListener('touchstart', function() {
    if (body.classList.contains('hover-active')) {
        resetEffect();
    } else {
        activateEffect();
    }
});

// Reakcja na najechanie myszką
body.addEventListener('mouseover', function() {
    activateEffect();
});

// Reakcja na opuszczenie kursora
body.addEventListener('mouseout', function() {
    resetEffect();
});