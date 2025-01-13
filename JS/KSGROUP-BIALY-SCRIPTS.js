const body = document.body;
const graphic = document.querySelector('#responsive-graphic img');

// Funkcja resetująca efekt
function resetEffect() {
    body.classList.remove('hover-active');
    if (graphic) {
        graphic.style.filter = 'brightness(0)';
    }
}

// Funkcja aktywująca efekt
function activateEffect() {
    body.classList.add('hover-active');
    if (graphic) {
        graphic.style.filter = 'brightness(1) invert(1)';
    }
}

// Dodanie efektów po najechaniu myszką (tylko desktop)
if (graphic) {
    graphic.addEventListener('mouseover', activateEffect);
    graphic.addEventListener('mouseout
