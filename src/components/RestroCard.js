import { IMG_URL } from "../utils/constants";

const RestroCard = (props) => {
	const { restroData } = props;
	//destructing
	const { id, name, avgRating, cuisines, cloudinaryImageId, sla } = restroData;
	const cuisineData = cuisines.map((cuisineValue) => cuisineValue);
	return (
		<div>
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
			<div>
				<p className="absolute bg-teal-950 text-white p-2">Veg</p>
				<RestroCard {...props} />
			</div>
		);
	};
};
