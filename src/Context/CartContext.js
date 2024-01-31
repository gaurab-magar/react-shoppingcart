import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const initialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(initialState);

export const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(CartReducer, initialState);
    
    const addToCart = (product)=>{
        const updatedCart  = state.cartList.concat(product);
        updateTotal(updatedCart)

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCart
            }
        })
    }
    const removeFromCart = (product)=>{
       const updatedCart = state.cartList.filter((current)=> current.id !== product.id);
       updateTotal(updatedCart)

        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products :updatedCart
            }
        })
    }
    const updateTotal =(products)=>{
        let total = 0;
        products.forEach(product => total = total + product.id);
        dispatch({
            type:'UPDATE_TOTAL',
            payload: {
                total: total
            }
        })
    }

    const value = {
        total : state.total,
        cartList: state.cartList,
        addToCart,
        removeFromCart
    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
export const useCart = () =>{
    const Context = useContext(CartContext);
    return Context;
}