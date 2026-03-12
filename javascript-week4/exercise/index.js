// // const numbers = [1, 2, 3, 4, 5, 6];

// // const generateEvenNumbers = (numbers) => {
// // 	const evenNumbers = [];
// // 	for (let i = 0; i < numbers.length; i++) {
// // 		if (numbers[i] % 2 === 0) {
// // 			evenNumbers.push(numbers[i]);
// // 		}
// // 	}
// // 	return evenNumbers;
// // };

// // console.log(generateEvenNumbers(numbers));

// const student = {
// 	name: "John",
// 	scores: [70, 80, 90, 60],
// };

// const calculateAverageScore = (student) => {
// 	let averageScore = 0;

// 	for (let i = 0; i < student.scores.length; i++) {
// 		averageScore += student.scores[i];
// 	}
// 	const totalAverageScore = averageScore / student.scores.length;
// 	student.average = totalAverageScore;

// 	return student;
// };

// const studentWithAverageScore = calculateAverageScore(student);

// console.log(studentWithAverageScore);

function myFunction(email, name) {
	console.log(arguments);

	console.log(email);
	console.log(name);
}

myFunction("kamasahdickson@gmail.com", "John");
