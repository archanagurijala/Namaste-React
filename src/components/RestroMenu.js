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
		<div className="flex flex-col container justify-center m-10">
			<div className="flex-col">
				<h1 className="font-extrabold text-lg">{name}</h1>
				<h3>{cuisines.join(", ")}</h3>
				<h4>{totalRatingsString}</h4>
			</div>
			<div className="flex flex-col">
				{menuInfo.length === 0 ? (
					<ShimmerUi />
				) : (
					menuInfo.map((item) => {
						return (
							<div
								id={item?.card?.info?.id}
								className="flex flex-row justify-between w-[1000px] m-4 border border-solid shadow-sm p-4">
								<div className="item-info">
									<h3>{item?.card?.info?.name}</h3>
									<h5>{item?.card?.info?.description}</h5>
								</div>
								<img
									src={IMG_URL + item?.card?.info?.imageId}
									className="w-[250px]"
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
