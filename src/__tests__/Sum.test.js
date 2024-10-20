import { Sum } from "../components/Sum";

test("Sum function to calculate the sum of two numbers", () => {
	const result = Sum(2, 3);

	//assertion
	expect(result).toBe(5);
});
