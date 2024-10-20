import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Should be in contact component", () => {
	it("Should load contact component", () => {
		render(<Contact />);
		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
	});

	it("Should have button submit in contact component", () => {
		render(<Contact />);
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument("Submit");
	});

	it("Should have all input text boxes in contact component", () => {
		render(<Contact />);
		const inputs = screen.getAllByRole("textbox");
		expect(inputs.length).toBe(2);
	});

	it("Should have input placeholder in contact component", () => {
		render(<Contact />);
		const name = screen.getByPlaceholderText("name");
		expect(name).toBeInTheDocument();
	});
});
