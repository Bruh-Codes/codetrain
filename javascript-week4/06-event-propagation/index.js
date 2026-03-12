// Lesson 06: event propagation

const outerBox = document.getElementById("outer-box");
const middleBox = document.getElementById("middle-box");
const innerBox = document.getElementById("inner-box");
const propagationButton = document.getElementById("propagation-button");
const logList = document.getElementById("log-list");

function addLog(message) {
	if (logList.firstElementChild.textContent === "Waiting for propagation logs...") {
		logList.innerHTML = "";
	}

	const listItem = document.createElement("li");
	listItem.textContent = message;
	logList.appendChild(listItem);
	console.log(message);
}

window.addEventListener(
	"click",
	function () {
		addLog("Capture: window");
	},
	true
);

document.addEventListener(
	"click",
	function () {
		addLog("Capture: document");
	},
	true
);

outerBox.addEventListener(
	"click",
	function () {
		addLog("Capture: outer box");
	},
	true
);

middleBox.addEventListener(
	"click",
	function () {
		addLog("Capture: middle box");
	},
	true
);

innerBox.addEventListener(
	"click",
	function () {
		addLog("Capture: inner box");
	},
	true
);

propagationButton.addEventListener("click", function () {
	addLog("Target: button");
});

innerBox.addEventListener("click", function () {
	addLog("Bubble: inner box");
});

middleBox.addEventListener("click", function () {
	addLog("Bubble: middle box");
});

outerBox.addEventListener("click", function () {
	addLog("Bubble: outer box");
});

document.addEventListener("click", function () {
	addLog("Bubble: document");
});

window.addEventListener("click", function () {
	addLog("Bubble: window");
});
