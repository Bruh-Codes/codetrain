const nav = document.getElementById("navigation")
const toggle = document.querySelector(".toggle")

toggle.addEventListener("click", () =>{
    nav.classList.toggle("nav")
});

const navLinks = document.querySelectorAll('#navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove("nav");
    });
});


