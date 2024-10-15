import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestroMenu = (resId) => {
	const [restroInfo, setRestroInfo] = useState([]);
	const [menuInfo, setMenuInfo] = useState([]);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const response = await fetch(MENU_URL + resId);
		const json = await response.json();
		console.log("json : ", json?.data?.cards);
		const restroInfo = json?.data?.cards[2]?.card?.card?.info;
		const menuInfo =
			json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
				(item) =>
					item?.card?.card?.["@type"] ===
					"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
			);
		console.log(menuInfo);
		setRestroInfo(restroInfo);
		setMenuInfo(menuInfo);
	};
	return [restroInfo, menuInfo];
};

export default useRestroMenu;
