const { Account, Transaction } = require("./Account");

const BogdansAccount = new Account("Bogdan");
const HannahsAccount = new Account("Hannah");
test("check methods of Account object", () => {
	expect(BogdansAccount.balance).toBe(0);
	expect(BogdansAccount.deposit(50)).toBeFalsy();
	expect(BogdansAccount.balance).toBe(50);
	expect(BogdansAccount.withdraw(20)).toBeFalsy();
	expect(BogdansAccount.balance).toBe(30);
});

test("check PrintStatement", () => {
	const statement = BogdansAccount.printStatement();
	const date = new Date();
	expect(statement).toBe(`Date: ${date}, Balance:30`);
});

test("making a transaction", () => {
	BogdansAccount.deposit(70);
	BogdansAccount.transact(HannahsAccount, 100);
	expect(HannahsAccount.balance).toBe(100);
	expect(BogdansAccount.balance).toBe(0);
});
