const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function nextSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 4000);
const menu = document.getElementById('menuToggle'),
    nav = document.getElementById('navMenu');
menu.addEventListener('click', () => nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex');

function showInfo(title, text) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalText').textContent = text;
    document.getElementById('modal').style.display = 'flex'
}

function closeInfo() {
    document.getElementById('modal').style.display = 'none'
}
window.onclick = e => {
    if (e.target.id === 'modal') closeInfo()
}