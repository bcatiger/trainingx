const sum = require("./jestGettingStarted");

test("adds 2 and 5 to equal 7", () => {
	expect(sum(2, 5)).toBe(7);
});
