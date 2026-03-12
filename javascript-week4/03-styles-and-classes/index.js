// Lesson 03: styles and classes

const board = document.querySelector(".board");
const firstStyleCard = document.getElementById("first-style-card");
const featureCard = document.querySelector(".feature-card");
const removableCard = document.querySelector(".removable-card");
const highlightButton = document.getElementById("highlight-button");
const themeButton = document.getElementById("theme-button");

firstStyleCard.style.backgroundColor = "#f4e8ff";
firstStyleCard.style.borderColor = "#9340d1";

highlightButton.addEventListener("click", function () {
	featureCard.classList.toggle("is-highlighted");
	removableCard.classList.toggle("is-hidden");
});

themeButton.addEventListener("click", function () {
	board.classList.toggle("alt-theme");
});
