import { createSlice } from "@reduxjs/toolkit";

/* return an object which has actions & reducer

{
    actions: {
        addCart,
        deleteCart,
        clearCart
    },
    reducer
}

*/

const cartSlice = createSlice({
	name: "cart",
	/* initial state is an object with items as an array */
	initialState: {
		items: [],
	},

	/* reducers have actions which has reducer function */
	reducers: {
		/* Modify the state using push javascript function   */
		addItem: (state, action) => {
			/* 
             Add to the Cart: Vanialla(Older) Redux - Don't Mutate State, return is mandatory -  We have to return a new state
			 const newState = [...state];
			 newState.items.push(action.payload);
			 return newState;
            */

			// Immer JS does the above logic behind the scenes and gives us the below simple mutatable state

			// Redux Toolkit Mutating the state here, return is not mandatory - We can mutate the state directly

			state.items.push(action.payload);
		},
		/* Modify the state using pop javascript function   */
		removeItems: (state) => {
			state.items.pop();
		},
		clearCart: (state) => {
			/** State is local variable hence if state = [] , it does not change the original state
			 *
			 * console.log(current(state))
			 */
			state.items.length = 0; //makes state as empty array state = [] will not work

			// return  {items : [] } - is another way to empty the state object
			// RTK - either Mutate a state or return a new state.
		},
	},
});

/** Cart slice export all reducer functions
 *  {
   actions: {
     addItem,
     removeItem,
     clearCart
   },
   reducers
 }
 * 
 */
export const { addItem, removeItesm, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
