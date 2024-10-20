import { render, screen } from "@testing-library/react";
import RestroCard from "../components/RestroCard";
import MOCK_DATA from "../mocks/restroMockData.json";
import { getNewRestro } from "../components/RestroCard";
import "@testing-library/jest-dom";

describe("Should render Restaurant card component", () => {
	it("Should render Restaurant card component with props data", () => {
		render(<RestroCard restroData={MOCK_DATA} />);

		const name = screen.getByText("Capital Multi Cuisine Restaurant");
		expect(name).toBeInTheDocument();
	});
	it("should render Restaurant Card component with Veg Label", () => {
		const RestroCardNew = getNewRestro(RestroCard);
		render(<RestroCardNew restroData={MOCK_DATA} />);

		const vegValue = screen.getByText("Veg");
		expect(vegValue).toBeInTheDocument();
	});
});
