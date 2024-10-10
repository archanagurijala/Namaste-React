import restroObj from "./../utils/mockData.js";
import { useState, useEffect } from "react";
import RestroCard from "./RestroCard.js";
import ShimmerUi from "./ShimmerUI.js";
import { Link } from "react-router-dom";
import useRestroInfo from "../utils/useRestroInfo.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
	const [listOfRestros, filteredRestros, filteredInputItems, topRatingFilter] =
		useRestroInfo();

	const [inputValue, setInputValue] = useState("");

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) {
		return (
			<p>Oops! you look offline. Please check your internet connection.</p>
		);
	} else {
		return listOfRestros.length === 0 ? (
			<ShimmerUi />
		) : (
			<div className="">
				<div className="flex justify-between">
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
							className="border border-solid border-black mr-2"
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
						<div className="w-[250px] m-4 rounded-sm backdrop-blur-sm border  border-solid shadow-lg p-4 hover:translate-y-1 hover:scale-110 transition ease-in-out">
							<Link to={"/restaurants/" + restaurant.info.id}>
								<RestroCard
									key={restaurant.info.id}
									restroData={restaurant.info}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		);
	}
};
export default Body;
