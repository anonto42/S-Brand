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
            return state.cart.filter(item => item.id != action.payload.id);
            // return state.cart.splice(action.payload)
        }
    }
})

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;