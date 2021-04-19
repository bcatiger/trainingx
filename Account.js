class Account {
	constructor(name) {
		this.name = name;
		this.transactions = [];
		this.balance = 0;
		this.date = new Date();
	}

	transact(to, amount) {
		this.transactions.push(new Transaction(this, to, amount));
	}

	deposit(amount) {
		this.balance += amount;
	}

	withdraw(amount) {
		this.balance -= amount;
	}

	printStatement() {
		return `Date: ${this.date}, Balance:${this.balance}`;
	}
}

class Transaction {
	constructor(from, to, amount) {
		this.from = from;
		this.to = to;
		this.amount = amount;

		this.from.balance -= amount;
		this.to.balance += amount;
	}
}

module.exports = { Account, Transaction };
