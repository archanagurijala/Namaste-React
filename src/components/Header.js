import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
	let btnName = "Login";
	const onlineStatus = useOnlineStatus();
	const status = onlineStatus ? "Online 🟢" : "Offline 🔴";
	const [buttonName, setButtonName] = useState("Logout");

	const { loggedInUser } = useContext(UserContext);

	// Subscribing to teh store using our Selector - portion of the store to be subscribed - cart.items
	const cartItems = useSelector((store) => store.cart.items);

	return (
		<div className="flex justify-between border border-solid shadow-sm">
			<img className="w-24" srcSet={LOGO_URL} />

			<div className="flex ">
				<ul className="flex p-4 m-4 items-center">
					<li className="px-2">
						<Link to="/">Home</Link>
					</li>
					<li className="px-2">
						<Link to="/about">About us</Link>
					</li>
					<li className="px-2">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-2">
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className="px-2">
						Hello,{" "}
						<span className="font-bold" data-testid="userNameDisplay">
							{loggedInUser}
						</span>
						! <br />
						Status : {status}
					</li>

					<li className="px-2">
						<Link to="/cart" data-testid="cart">
							Cart ({cartItems.length})
						</Link>
					</li>

					<button
						className="px-4 bg-gray-100 mx-2 border border-solid"
						onClick={() => {
							buttonName === "Login"
								? setButtonName("Log out")
								: setButtonName("Login");
						}}>
						{buttonName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
