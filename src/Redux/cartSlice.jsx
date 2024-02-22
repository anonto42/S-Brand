import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:[]
    },
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.productAmout.filter(item => item.id != action.payload.id);
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;