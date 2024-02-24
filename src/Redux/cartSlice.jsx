import { createSlice } from '@reduxjs/toolkit'

// const local = JSON.parse(localStorage.getItem('cart'))


const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: JSON.parse(localStorage.getItem("cart")) ?? []
    },
    reducers: {
        addToCart(state, action) {
            state.cart.push(action.payload)
        },
        deleteFromCart(state, action) {
            const next = state.cart.filter(item => item.id !== action.payload.id);
            state.cart = next;
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;