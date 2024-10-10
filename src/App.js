import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import ShimmerUi from "./components/ShimmerUI";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
	return (
		<div className="container-bg">
			<Header />
			<Outlet />
		</div>
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
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
