import { IMG_URL } from "../utils/constants";

const Itemlist = ({ items }) => {
	console.log(items);
	return (
		items &&
		items.map((menuitems) => {
			return (
				<div
					key={menuitems?.card?.info?.id}
					className="flex flex-row justify-between w-[700px] my-4 border-b-4  p-4">
					<div>
						<h3>{menuitems?.card?.info?.name}</h3>
						<h3>{"₹" + menuitems?.card?.info?.price / 100}</h3>
						<h5>{menuitems?.card?.info?.description}</h5>
					</div>
					<img
						src={IMG_URL + menuitems?.card?.info?.imageId}
						className="w-20"
					/>
				</div>
			);
		})
	);
};

export default Itemlist;
