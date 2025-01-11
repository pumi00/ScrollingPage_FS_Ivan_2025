let dubaiText = document.getElementById("spaintext");
let burjkhalifa = document.getElementById("burjkhalifa");
let stars = document.getElementById("stars");
let text = document.getElementById("text")

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    dubaiText.style.left = value * -2 + 'px';
    burjkalifa.style.left = value * 1 + 'px';
    stars.style.left = value * 1 + 'px';
});

window.addEventListener('scroll', function () {
    let parallax = document.querySelector('.parallax-bg');
    let offset = window.scrollY;
    parallax.style.transform = 'translateY(' + offset * 0.5 + 'px)';
});