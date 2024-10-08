import { useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError();
	return (
		<div>
			<h1>Oops!!</h1>
			<p>Something went wrong</p>
			<p>{error.statusText}</p>
		</div>
	);
};

export default Error;
