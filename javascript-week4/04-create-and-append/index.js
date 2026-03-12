// Lesson 04: create and append

const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");

addTaskButton.addEventListener("click", function () {
	const taskText = taskInput.value.trim();

	if (taskText === "") {
		return;
	}

	const listItem = document.createElement("li");
	listItem.className = "task-item";

	const taskName = document.createElement("span");
	taskName.textContent = taskText;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";

	listItem.appendChild(taskName);
	listItem.appendChild(deleteButton);
	taskList.appendChild(listItem);

	emptyState.style.display = "none";
	taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
	if (event.target.tagName === "BUTTON") {
		event.target.parentElement.remove();
	}

	if (taskList.children.length === 0) {
		emptyState.style.display = "block";
	}
});
