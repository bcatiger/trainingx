const Account = require("./Account");

const MyAccount = new Account();

test("check methods of Account object", () => {
	expect(MyAccount.balance).toBe(0);
	expect(MyAccount.deposit(50)).toBeFalsy();
	expect(MyAccount.balance).toBe(50);
	expect(MyAccount.withdraw(20)).toBeFalsy();
	expect(MyAccount.balance).toBe(30);
});

test("check PrintStatement", () => {
	const statement = MyAccount.printStatement();
	const date = new Date();
	expect(statement).toBe(`Date: ${date}, Amount: 0, Balance:30`);
});
