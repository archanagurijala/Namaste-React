import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
	let btnName = "Login";
	const onlineStatus = useOnlineStatus();
	const status = onlineStatus ? "Online 🟢" : "Offline 🔴";
	const [buttonName, setButtonName] = useState("Logout");

	const { loggedInUser } = useContext(UserContext);

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
						Hello, <span className="font-bold">{loggedInUser}</span>! <br />
						Status : {status}
					</li>

					<button
						className="px-4 bg-gray-100 mx-2 border border-solid"
						onClick={() => {
							btnName = "Logout";
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
