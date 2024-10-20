import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Should render Header Component", () => {
	it("Should render header component with login  button", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);
		const loginButton = screen.getByRole("button");
		expect(loginButton).toBeInTheDocument();
	});
	it("Should render header component with cart items", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);
		const cartItems = screen.getByText("Cart (0)");
		expect(cartItems).toBeInTheDocument();
	});
	it("Should toggle login button", () => {
		render(
			<BrowserRouter>
				<Provider store={appStore}>
					<Header />
				</Provider>
			</BrowserRouter>
		);
		const logOutButton = screen.getByRole("button", { text: "Logout" });
		fireEvent.click(logOutButton);
		expect(logOutButton).toBeInTheDocument();
	});
});
