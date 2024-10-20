import { useState, useContext } from "react";
import RestroCard from "./RestroCard.js";
import ShimmerUi from "./ShimmerUI.js";
import { Link } from "react-router-dom";
import useRestroInfo from "../utils/useRestroInfo.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { getNewRestro } from "./RestroCard.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
	const [listOfRestros, filteredRestros, filteredInputItems, topRatingFilter] =
		useRestroInfo();

	// console.log(listOfRestros);
	// console.log(filteredRestros);

	const [inputValue, setInputValue] = useState("");

	const onlineStatus = useOnlineStatus();

	const RestroCardNew = getNewRestro(RestroCard);

	const { setUserName, loggedInUser } = useContext(UserContext);

	if (onlineStatus === false) {
		return (
			<p>Oops! you look offline. Please check your internet connection.</p>
		);
	} else {
		return listOfRestros.length === 0 ? (
			<ShimmerUi />
		) : (
			<div className="">
				<div className="flex justify-center">
					<div className="m-4 p-4">
						<label>Username : </label>
						<input
							type="text"
							data-testid="username"
							className="border border-solid border-black mr-2 pl-2 text-gray-400 italic"
							onChange={(e) => setUserName(e.target.value)}
							placeholder={loggedInUser}
						/>
					</div>
					<div className="m-4 p-4">
						<button
							className="px-4 bg-gray-100 mx-2 border border-solid"
							onClick={() => {
								topRatingFilter();
							}}>
							Filter by Top Rating
						</button>
					</div>
					<div className="search m-4 p-4">
						<input
							type="text"
							data-testid="inputValue"
							className="border border-solid border-black mr-2 pl-2"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
						/>
						<button
							className="px-4 bg-gray-100 mx-2 border border-solid"
							onClick={() => {
								filteredInputItems(inputValue);
							}}>
							Search
						</button>
					</div>
				</div>
				<div className="flex flex-wrap">
					{filteredRestros.map((restaurant) => (
						<div
							key={restaurant?.info?.id}
							data-testid="restroCards"
							className="w-[250px] m-4 rounded-sm backdrop-blur-sm border  border-solid shadow-lg p-4 hover:translate-y-1 hover:scale-110 transition ease-in-out">
							<Link to={"/restaurants/" + restaurant?.info?.id}>
								{restaurant?.info?.veg ? (
									<RestroCardNew restroData={restaurant?.info} />
								) : (
									<RestroCard restroData={restaurant?.info} />
								)}
							</Link>
						</div>
					))}
				</div>
			</div>
		);
	}
};
export default Body;
