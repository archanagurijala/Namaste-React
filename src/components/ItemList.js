import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const Itemlist = ({ items }) => {
	//console.log(items);
	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		//Disptach an action
		dispatch(addItem(item));
	};
	return (
		items &&
		items.map((menuitems) => {
			return (
				<div
					data-testid="foodItems"
					key={menuitems?.card?.info?.id}
					className="flex flex-row justify-between w-[900px] my-4 border-b-4  p-4">
					<div>
						<h3>{menuitems?.card?.info?.name}</h3>
						<h3>{"₹" + menuitems?.card?.info?.price / 100}</h3>
						<h5 className="w-[700px]">{menuitems?.card?.info?.description}</h5>
					</div>
					<div className="w-44 p-4">
						<div className="absolute">
							<button
								data-testid="add"
								className="p-2 mx-16 rounded-lg bg-slate-700 text-slate-300 shadow-sm w-20"
								onClick={() => handleAddItem(menuitems)}>
								Add +
							</button>
						</div>
						<img src={IMG_URL + menuitems?.card?.info?.imageId} />
					</div>
				</div>
			);
		})
	);
};

export default Itemlist;
