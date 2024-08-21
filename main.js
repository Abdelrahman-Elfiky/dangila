window.onload = function() {
    alert("ًWelcome to Dangila");
}
document.querySelector('.buy').addEventListener('click', function() {
    alert('Thank you for your purchase!');
});
document.querySelector('.buy').addEventListener('click', function() {
    this.textContent = 'Purchased!';
});
let text = "dangila";
let i = 0;
function typeWriter() {
if (i < text.length) {
    document.getElementById("welcomeText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
}
}
typeWriter();
const elements = document.querySelectorAll('.sec4, .sec5, .sec6');
window.addEventListener('scroll', function() {
elements.forEach(element => {
    let position = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
    } else {
    element.style.opacity = 0;
    element.style.transform = 'translateY(50px)';
    }
});
});