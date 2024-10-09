import React from "react";

class UserComponent extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.name + " child contructor called");
		this.state = {
			userInfo: {
				name: "Archana",
				location: "Hyderabad",
			},
		};
	}

	async componentDidMount() {
		// when the component is called
		console.log(this.props.name + "Child DidMount");

		// this.timer = setInterval(() => {
		// 	console.log("I am a timer");
		// }, 1000);
		// Api call
		const data = await fetch("https://api.github.com/users/archanagurijala");
		const json = await data.json();
		this.setState({
			userInfo: json,
		});
	}

	componentDidUpdate() {
		console.log(this.props.name + "Component Did Update");
	}

	componentWillUnmount() {
		// clearInterval(this.timer);
		console.log(this.props.name + "Component Will Unmount");
	}

	render() {
		console.log(this.props.name + "Child Render");

		const { name, location, avatar_url } = this.state.userInfo;
		return (
			<div className="user-card">
				<img src={avatar_url} />
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h4>Contact: @archanagurijala</h4>
			</div>
		);
	}
}

export default UserComponent;
