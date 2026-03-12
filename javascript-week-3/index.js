// function greetUser(name) {
// 	return `Hello ${name}!`;
// }
// const greetings = greetUser("Dickson");
//
// console.log(greetings);
//
//
//
//
//

// function findLargeNumber(num1, num2) {
// 	if (num1 === num2) {
// 		return num1;
// 	} else {
// 		return Math.max(num1, num2);
// 	}
// }

// const largestNumber = findLargeNumber(5, 1);

// console.log(largestNumber);
//
//
//
//
//
function validateLogin(username, password, isBlocked) {
	if (isBlocked) return "User blocked";

	if (username === "admin" && password === "1234") {
		return "Login successful";
	}
	return "Invalid credentials";
}

const successfulResult = validateLogin("admin", "1234", false);
console.log(successfulResult);

const isBlockedResult = validateLogin("admin", "1234", true);
console.log(isBlockedResult);

const invalidCredentials = validateLogin("Dickson", "1234", false);
console.log(invalidCredentials);
