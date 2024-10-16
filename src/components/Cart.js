import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};
	return (
		<div className="m-5 p-4 center">
			<h1 className="font-bold text-lg">Cart Summary</h1>
			{cartItems.length > 0 ? (
				<button
					className="px-4 bg-gray-100 mx-2 border border-solid"
					onClick={handleClearCart}>
					Clear Cart
				</button>
			) : (
				<h2>Oops! Your cart is empty. Please add items to the cart</h2>
			)}

			<div>
				<Itemlist items={cartItems} />
			</div>
		</div>
	);
};

export default Cart;
