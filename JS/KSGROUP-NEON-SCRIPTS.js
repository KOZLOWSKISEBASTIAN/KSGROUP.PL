const body = document.body;
const imageContainer = document.getElementById('KSGROUP-LOGO-SVG-WEBP');
// Funkcja do wykrywania urządzenia mobilnego
function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|ipad|iphone|ipod|blackberry|bb10|windows phone|mobile/i.test(userAgent);
}
// Funkcja ustawiająca grafikę
function setImage() {
    const isMobile = isMobileDevice();
    const imageUrl = isMobile
        ? "https://ksgroup.pl/GRAFIKA/KSGROUP-BIALY-WEBP.webp" // Dla urządzeń mobilnych
        : "https://ksgroup.pl/GRAFIKA/KSGROUP-BIALY-SVG.svg"; // Dla komputerów

    imageContainer.setAttribute("src", imageUrl);
}
// Funkcja resetująca efekt
function resetEffect() {
    body.classList.remove('hover-active');
    imageContainer.style.filter = 'brightness(0)';
}
// Funkcja aktywująca efekt
function activateEffect() {
    body.classList.add('hover-active');
    imageContainer.style.filter = 'brightness(1) invert(23%) sepia(198%) saturate(5000%) hue-rotate(300deg)';
}
// Reakcja na dotyk na urządzeniach mobilnych
imageContainer.addEventListener('touchstart', function () {
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
// Ustaw grafikę na podstawie urządzenia
setImage();
