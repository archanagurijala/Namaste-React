import restroObj from "./../utils/mockData.js";
import { useState, useEffect } from "react";
import RestroCard from "./RestroCard.js";
import ShimmerUi from "./ShimmerUI.js";
import { Link } from "react-router-dom";
import useRestroInfo from "../utils/useRestroInfo.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
	const [listOfRestros, filteredRestros] = useRestroInfo();

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
			<div className="body">
				<div className="filter-bar">
					<div className="search">
						<input
							type="text"
							name="Searcbox"
							className="search-box"
							value={inputValue}
							onChange={(e) =>
								inputValue === "" ? "" : setInputValue(e.target.value)
							}
						/>
						<button
							onClick={() => {
								console.log(listOfRestros);
								const filteredItems = listOfRestros.filter((res) =>
									res.info.name.toLowerCase().includes(inputValue.toLowerCase())
								);
								setFilteredRestros(filteredItems);
							}}>
							Search
						</button>
					</div>
					<div className="filter-btn">
						<button
							className="filter"
							onClick={() => {
								const filteredList = listOfRestros.filter(
									(restro) => restro?.info?.avgRating > 4.1
								);
								setListOfRestros(filteredList);
							}}>
							Filter by Top Rating
						</button>
					</div>
				</div>
				<div className="restrocontainer">
					{filteredRestros.map((restaurant) => (
						<Link to={"/restaurants/" + restaurant.info.id}>
							<RestroCard
								key={restaurant.info.id}
								restroData={restaurant.info}
							/>
						</Link>
					))}
				</div>
			</div>
		);
	}
};
export default Body;
