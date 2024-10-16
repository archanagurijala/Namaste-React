import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import ShimmerUi from "./components/ShimmerUI";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const App = () => {
	const [userName, setUserName] = useState();

	useEffect(() => {
		const data = {
			name: "Archana",
		};
		setUserName(data.name);
	}, []);

	return (
		<Provider store={appStore}>
			<div className="container-bg">
				<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
					<Header />
					<Outlet />
				</UserContext.Provider>
			</div>
		</Provider>
	);
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<ShimmerUi />}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/restaurants/:resId",
				element: <RestroMenu />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
