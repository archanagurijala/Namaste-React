import { fireEvent, render, screen } from "@testing-library/react";
import { useContext } from "react";
import { act } from "@testing-library/react";
import Body from "../components/Body";
import Header from "../components/Header";
import MOCK_DATA from "../mocks/cardMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import UserContext from "../utils/UserContext";

//Mock fetch callback function exactly similar to browser function
global.fetch = jest.fn(() => {
	//returns a promise
	return Promise.resolve({
		//returns a json
		json: () => {
			//return the promise with data
			return Promise.resolve(MOCK_DATA);
		},
	});
});

describe("Should render the Body component", () => {
	it("Should render Body component for search ", async () => {
		await act(async () => {
			render(
				<BrowserRouter>
					<Body />
				</BrowserRouter>
			);
		});

		const searchButton = screen.getByRole("button", { name: "Search" });

		const inputValue = screen.getByTestId("inputValue");

		fireEvent.change(inputValue, { target: { value: "tiffins" } });

		fireEvent.click(searchButton);

		const cards = screen.getAllByTestId("restroCards");

		expect(cards.length).toBe(2);
	});

	const setUserName = () => {
		return "Admin";
	};

	it("Should render Body component for username", async () => {
		await act(async () => {
			render(
				<BrowserRouter>
					<Provider store={appStore}>
						<UserContext.Provider
							value={{ loggedInUser: "Admin", setUserName }}>
							<Header />
							<Body />
						</UserContext.Provider>
					</Provider>
				</BrowserRouter>
			);
		});

		const username = screen.getByTestId("username");

		fireEvent.change(username, { target: { value: "Admin" } });
		const userNameInput = username.value;

		const userNameDisplay = screen.getByTestId("userNameDisplay");
		const usernameValue = userNameDisplay.textContent;

		expect(userNameInput).toBe(usernameValue);
	});
});
