// const age = 16;

// const isAnAdult = age >= 18;
// console.log(isAnAdult ? "Adult" : "Minor");
//
//
//
//

// let isUserLoggedIn = true;

// if (isUserLoggedIn === true) {
// 	console.log("Welcome back!");
// } else {
// 	console.log("Please log in");
// }
//
//
//
//
// const numbers = [1, 2, 3, 4, 5];

// for (let i = 1; i <= numbers.length; i++) {
// 	console.log(i);
// }
//
//
//
//
// for (let i = 3; i >= 1; i--) {
// 	console.log(i);
// }
//
//
//

// for (let i = 1; i <= 5; i++) {
// 	if (i % 2 === 0) {
// 		console.log("even");
// 	} else {
// 		console.log(i);
// 	}
// }
//
//
//
// let counter = 0;

// while (counter < 4) {
// 	if (counter === 0) {
// 		console.log("Start");
// 	} else if (counter === 3) {
// 		console.log("End");
// 	} else {
// 		console.log(counter);
// 	}
// 	counter++;
// }
//
//
//
// for (let i = 1; i <= 5; i++) {
// 	console.log(i);

// 	if (i === 3) {
// 		break;
// 	}
// }
//
//
//

// let number = 1;

// while (true) {
// 	console.log(number);
// 	if (number === 3) {
// 		break;
// 	}
// 	number++;
// }
//
//
//

// let students = ["Harrison", "Ram", "Dickson", "Boateng", "Latifa"];

// for (let i = 0; i < students.length; i++) {
// 	console.log(students[i]);
// 	if (students[i] === "Boateng") break;
// }

// //
// //
// //
// //
// //
// console.log("//");
// console.log("//");
// console.log("using while loop");
// console.log("//");
// console.log("//");

// let count = 0;
// while (count < students.length) {
// 	console.log(students[count]);
// 	if (students[count] == "Boateng") break;

// 	count++;
// }
//
//
//
//
// for (let i = 1; i <= 5; i++) {
// 	if (i === 3) {
// 		console.log("skipping");
// 		continue;
// 	}
// 	console.log(i);
// }
//
//
//
//

let counter = 5;
do {
	console.log("counting:", counter);
	if (counter % 2 === 0) {
		counter -= 2;
	} else {
		counter -= 1;
	}
} while (counter > 0);
