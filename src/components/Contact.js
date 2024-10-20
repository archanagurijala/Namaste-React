const Contact = () => {
	return (
		<div>
			<h1 className="font-bold text-3xl m-4 p-4">Contact Us</h1>
			<form className="m-4">
				<input
					type="text"
					className="border border-solid border-black mr-2 pl-2 text-gray-400 italic"
					placeholder="name"
				/>
				<input
					type="text"
					className="border border-solid border-black mr-2 pl-2 text-gray-400 italic"
					placeholder="message"
				/>
				<button className="px-4 bg-gray-100 mx-2 border border-solid">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
