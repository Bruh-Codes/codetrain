// Lesson 01: DOM selectors

const mainTitle = document.getElementById("main-title");
const firstCard = document.querySelector(".card");
const topicItems = document.querySelectorAll(".topic-item");
const helperButton = document.querySelector('[data-role="support"]');
const specialTopic = document.querySelector(".special-topic");
const beginnerChip = document.querySelector('[data-level="beginner"]');

console.log(mainTitle);
console.log(firstCard);
console.log(topicItems);
console.log(helperButton);
console.log(specialTopic);
console.log(beginnerChip);

mainTitle.textContent = "DOM selectors";
firstCard.style.borderColor = "#bf5b36";
specialTopic.style.fontWeight = "700";
beginnerChip.style.backgroundColor = "#ffe7db";

topicItems.forEach((item) => {
	item.style.color = "#8b3f23";
});

helperButton.addEventListener("click", function () {
	helperButton.textContent = "Button selected";
});
