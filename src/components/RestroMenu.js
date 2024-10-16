import { useParams } from "react-router-dom";
import { useState } from "react";
import ShimmerUi from "./ShimmerUI";
import useRestroMenu from "../utils/useRestroMenu";
import RestroCategory from "./RestroCategory";

const RestroMenu = () => {
	const { resId } = useParams();

	const [showIndex, setShowIndex] = useState(0);

	const [restroInfo, menuInfo] = useRestroMenu(resId);

	const { name, cuisines, totalRatingsString } = restroInfo;

	return restroInfo.length === 0 ? (
		<ShimmerUi />
	) : (
		<div className="w-[900px] mx-auto m-10">
			<div className="">
				<h1 className="font-extrabold text-lg">{name}</h1>
				<h3>{cuisines.join(", ")}</h3>
				<h4>{"✳️ " + totalRatingsString}</h4>
			</div>
			<div className="">
				{menuInfo.length === 0 ? (
					<ShimmerUi />
				) : (
					menuInfo.map((category, index) => {
						return (
							<RestroCategory
								key={category?.card?.card?.title}
								data={category?.card?.card}
								itemList={index === showIndex && true}
								setShowIndex={() => setShowIndex(index != showIndex && index)}
							/>
						);
					})
				)}
			</div>
		</div>
	);
};

export default RestroMenu;
