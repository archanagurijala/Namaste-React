import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
	let btnName = "Login";
	const onlineStatus = useOnlineStatus();
	const status = onlineStatus ? "Online 🟢" : "Offline 🔴";
	const [buttonName, setButtonName] = useState("Login");

	return (
		<div className="header">
			<img className="logo" srcSet={LOGO_URL} />

			<div className="menu">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
					<li>Status : {status}</li>
					<button
						className="login"
						onClick={() => {
							btnName = "Logout";
							buttonName === "Login"
								? setButtonName("Log out")
								: setButtonName("Login");
							console.log(buttonName);
						}}>
						{buttonName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
