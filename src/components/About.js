import UserComponent from "./UserComponent";
import User from "./User";
import { Component } from "react";
import UserContext from "../utils/UserContext";

// const About = () => {
// 	return (
// 		<div className="">
// 			<h1>ABout us </h1>
// 			<UserComponent />
// 		</div>
// 	);
// };

class About extends Component {
	constructor(props) {
		super(props);
		console.log("Parent Constructor");
	}
	render() {
		console.log("Parent render");
		return (
			<div className="about">
				<h1>About us</h1>
				<UserContext.Consumer>
					{({ loggedInUser }) => {
						return (
							<h2>
								Hello, <span className="italic">{loggedInUser}!</span>
							</h2>
						);
					}}
				</UserContext.Consumer>
				<UserComponent name="first"> </UserComponent>
				{/* <UserComponent name="second"> </UserComponent> */}
				<User />
			</div>
		);
	}
}

export default About;
