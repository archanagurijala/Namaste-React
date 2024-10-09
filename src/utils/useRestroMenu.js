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
		const restroInfo = json?.data?.cards[2]?.card?.card?.info;
		const menuInfo =
			json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
				?.card?.itemCards;
		setRestroInfo(restroInfo);
		setMenuInfo(menuInfo);
	};
	return [restroInfo, menuInfo];
};

export default useRestroMenu;
