// Lesson 05: event listeners

const clickButton = document.getElementById("click-button");
const nameInput = document.getElementById("name-input");
const hoverCard = document.getElementById("hover-card");
const eventOutput = document.getElementById("event-output");

function showMessage(message) {
	eventOutput.innerHTML += `${message}<br>`;
}

clickButton.addEventListener("click", function (event) {
	console.log("Button listener", event.target);
	showMessage("Button listener fired");
});

nameInput.addEventListener("input", function (event) {
	console.log("Input listener", event.target.value);
	showMessage(`Input value: ${event.target.value}`);
});

hoverCard.addEventListener("mouseenter", function () {
	console.log("Mouse entered the card");
	showMessage("Mouse entered the card");
});

document.addEventListener("click", function (event) {
	console.log("Document listener", event.target);
	showMessage("Document listener fired");
});

window.addEventListener("click", function (event) {
	console.log("Window listener", event.target);
	showMessage("Window listener fired");
});
