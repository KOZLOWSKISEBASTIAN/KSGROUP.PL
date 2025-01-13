const body = document.body;
const imageElement = document.getElementById('krakow');

// Wykrywanie urządzeń mobilnych
const isMobile = window.matchMedia('(max-width: 768px)').matches;

// Ustawienie odpowiedniego obrazu
function setImageSource() {
    if (isMobile) {
        imageElement.src = 'GRAFIKA/KSGROUP-BIALY-WEBP.webp'; // Zmieniamy na WEBP na urządzeniach mobilnych
    } else {
        imageElement.src = 'GRAFIKA/KSGROUP-BIALY-SVG.svg'; // Zostawiamy SVG dla desktopów
    }
}

// Wywołanie funkcji na starcie
setImageSource();

// Funkcja resetująca efekt
function resetEffect() {
    body.classList.remove('hover-active');
    imageElement.style.filter = 'brightness(0)';
}

// Funkcja aktywująca efekt
function activateEffect() {
    body.classList.add('hover-active');
    imageElement.style.filter = 'brightness(1) invert(1)';
}

// Reakcja na dotyk na urządzeniach mobilnych
imageElement.addEventListener('touchstart', function () {
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
