import { useState, useEffect } from "react";

const User = () => {
	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		console.log(" Component Mounted");
		// API Calls
		fetchUser();
		// const timer = setInterval(() => {
		// 	console.log("setInterval Called");
		// }, 1000);

		//here it clears the timer
		// return () => {
		// 	console.log("Component Unmounted");
		// 	clearInterval(timer);
		// };
	}, []);

	const fetchUser = async () => {
		try {
			const response = await fetch(
				"https://api.github.com/users/archanagurijala"
			);
			const json = await response.json();
			setUserInfo(json);
		} catch (error) {
			console.error("Error while fetching user data: ", error);
		}
	};
	return (
		<div className="user">
			<h1>About Me</h1>
			<h2>Name: {userInfo.name}</h2>
			<h2>Location: {userInfo.location}</h2>
			<img
				className="profile-pic"
				src={userInfo.avatar_url}
				alt="User Avatar"
			/>
		</div>
	);
};

export default User;
