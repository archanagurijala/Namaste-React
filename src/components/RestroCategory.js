import { useState } from "react";
import Itemlist from "./ItemList";

const RestroCategory = ({ data, itemList, setShowIndex }) => {
	const ToggleBtn = () => {
		setShowIndex();
	};
	return (
		<div>
			<div
				className="flex justify-between my-4 border-b-2 shadow-sm p-2 cursor-pointer"
				onClick={ToggleBtn}>
				<h1 className="text-center font-extrabold">
					{data?.title} ({data?.itemCards?.length})
				</h1>
				<span>↕️</span>
			</div>
			{itemList && <Itemlist items={data.itemCards} />}
		</div>
	);
};

export default RestroCategory;
