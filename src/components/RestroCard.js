import { IMG_URL } from "../utils/constants";

const RestroCard = (props) => {
	//destructing
	const { name, avgRating, cuisines, cloudinaryImageId, sla } =
		props?.restroData;
	const cuisineData = cuisines.map((cuisineValue) => cuisineValue);
	return (
		<div className="">
			<img
				srcSet={IMG_URL + cloudinaryImageId}
				alt=""
				className="h-52 w-full mb-4"
			/>
			<h1 className="font-bold">{name}</h1>
			<h3>
				{"✳️ " + avgRating + " stars"} . {sla.slaString}
			</h3>
			<p className="font-light text-gray-800 font-size-xs text-sm mt-2">
				{cuisineData.join(", ")}
			</p>
		</div>
	);
};

export default RestroCard;

export const getNewRestro = (RestroCard) => {
	return (props) => {
		return (
			<div className="newRestro">
				<label className="absolute bg-teal-950 text-white p-2">Veg</label>
				<RestroCard {...props} />
			</div>
		);
	};
};
