// Lesson 02: changing text and attributes

const sessionTitle = document.getElementById("session-title");
const sessionDescription = document.getElementById("session-description");
const statusBadge = document.getElementById("status-badge");
const roomValue = document.getElementById("session-room");
const featureImage = document.getElementById("feature-image");

console.log(roomValue.getAttribute("data-room"));

sessionTitle.textContent = "DOM Text and Attributes";
sessionDescription.textContent =
	"Text and attributes can be changed with JavaScript.";
statusBadge.textContent = "Open now";

roomValue.textContent = "Lab B";
roomValue.setAttribute("data-room", "Lab B");
roomValue.setAttribute("title", "This room was changed with JavaScript");

featureImage.setAttribute("data-state", "changed");
featureImage.setAttribute("title", "Image state changed");

console.log(roomValue.getAttribute("data-room"));
console.log(featureImage.getAttribute("data-state"));
