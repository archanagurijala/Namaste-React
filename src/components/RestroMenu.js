import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUI";
import { IMG_URL, MENU_URL } from "../utils/constants";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenu = () => {
	const { resId } = useParams();

	const [restroInfo, menuInfo] = useRestroMenu(resId);

	const { name, cuisines, totalRatingsString } = restroInfo;

	return restroInfo.length === 0 ? (
		<ShimmerUi />
	) : (
		<div className="menu">
			<div className="menu-desc">
				<h1>{name}</h1>
				<h3>{cuisines.join(", ")}</h3>
				<h4>{totalRatingsString}</h4>
			</div>
			<div className="menu-list">
				{menuInfo.length === 0 ? (
					<ShimmerUi />
				) : (
					menuInfo.map((item) => {
						return (
							<div id={item?.card?.info?.id} className="menu-item">
								<div className="item-info">
									<h3>{item?.card?.info?.name}</h3>
									<h5>{item?.card?.info?.description}</h5>
								</div>
								<img
									src={IMG_URL + item?.card?.info?.imageId}
									className="menu-img"
								/>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default RestroMenu;
