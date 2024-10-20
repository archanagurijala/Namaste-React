import { render, act, fireEvent, screen } from "@testing-library/react";
import RestroMenu from "../components/RestroMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "../mocks/mockRestroData.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import "@testing-library/jest-dom";

describe("Should render REsto Menu component and display cart", () => {
	global.fetch = jest.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve(MOCK_DATA),
		})
	);
	it("Should render Restro Menu component", async () => {
		await act(async () =>
			render(
				<BrowserRouter>
					<Provider store={appStore}>
						<Header />
						<RestroMenu />
						<Cart />
					</Provider>
				</BrowserRouter>
			)
		);

		const menuText = screen.getByText("Recommended (19)");
		fireEvent.click(menuText);
		const foodItems = screen.getAllByTestId("foodItems");
		expect(foodItems.length).toBe(19);
	});

	it("Should render Cart component", async () => {
		await act(async () =>
			render(
				<BrowserRouter>
					<Provider store={appStore}>
						<Header />
						<RestroMenu />
						<Cart />
					</Provider>
				</BrowserRouter>
			)
		);

		const menuText = screen.getByText("Recommended (19)");
		fireEvent.click(menuText);
		const foodItems = screen.getAllByTestId("foodItems");
		expect(foodItems.length).toBe(19);
		expect(screen.getByText("Cart (0)")).toBeInTheDocument();
		const addButton = screen.getAllByTestId("add");
		fireEvent.click(addButton[0]);
		expect(screen.getByText("Cart (1)")).toBeInTheDocument();
		const cartLink = screen.getByTestId("cart");
		fireEvent.click(cartLink);
		expect(foodItems.length).toBe(19);
		fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
		expect(screen.getAllByTestId("foodItems").length).toBe(19);
		expect(
			screen.getByText("Oops! Your cart is empty. Please add items to the cart")
		).toBeInTheDocument();
	});
});
