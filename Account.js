class Account {
	constructor() {
		this.balance = 0;
		this.amount = 0;
		this.date = new Date();
	}

	deposit(amount) {
		this.balance += amount;
	}

	withdraw(amount) {
		this.balance -= amount;
	}

	printStatement() {
		return `Date: ${this.date}, Amount: ${this.amount}, Balance:${this.balance}`;
	}
}

module.exports = Account;
