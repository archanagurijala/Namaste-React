import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
	/* reducer modify the app Store  */
	reducer: {
		/** Each slice will have it's own reducer */
		cart: cartReducer,
	},
});

export default appStore;
