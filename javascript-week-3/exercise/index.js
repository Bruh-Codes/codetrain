let totalBalance = 0;

let transactionHistory = [];

function deposit(amount) {
	totalBalance += amount;
	transactionHistory.push({
		type: "deposit",
		amount,
		time: Date.now(),
	});
	return totalBalance;
}

function withdraw(amount) {
	if (amount > totalBalance) return "Insufficient funds";
	transactionHistory.push({
		type: "debit",
		amount,
		time: Date.now(),
	});
	return (totalBalance -= amount);
}

function checkBalance() {
	return totalBalance;
}

console.log(deposit(10));
console.log(transactionHistory);
console.log(withdraw(5));
console.log(transactionHistory);
console.log(checkBalance());
