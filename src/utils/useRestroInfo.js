import { useEffect, useState } from "react";
import { RESTRO_URL } from "./constants";

const useRestroInfo = (resId) => {
	const [listOfRestros, setListOfRestros] = useState([]);

	const [filteredRestros, setFilteredRestros] = useState([]);

	// After the body component is rendered
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(RESTRO_URL);
		const json = await data.json();
		let cards = json?.data?.cards || [];
		cards = cards.filter(
			(card) => card?.card?.card?.id === "restaurant_grid_listing"
		);
		const restros =
			cards[0].card?.card?.gridElements?.infoWithStyle?.restaurants;
		setListOfRestros(restros);
		setFilteredRestros(restros);
	};
	const filteredInputItems = (inputValue) => {
		const filteredItems = listOfRestros.filter((res) =>
			res.info.name.toLowerCase().includes(inputValue.toLowerCase())
		);
		setFilteredRestros(filteredItems);
	};
	const topRatingFilter = () => {
		const filteredList = listOfRestros.filter(
			(restro) => restro?.info?.avgRating > 4.5
		);

		setFilteredRestros(filteredList);
	};

	return [listOfRestros, filteredRestros, filteredInputItems, topRatingFilter];
};

export default useRestroInfo;
