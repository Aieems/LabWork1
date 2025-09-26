import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  cart: []
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existing = state.cart.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map(item => item.id === action.payload.id ? { ...item, count: item.count + 1 } : item)
        };
      } else {
        return {
          ...state, cart: [...state.cart, { ...action.payload, count: 1 }]
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state, cart: state.cart.filter(item => item.id !== action.payload)
      };
    case 'INCREMENT':
      return {
        ...state, cart: state.cart.map(item => item.id === action.payload && item.count > 0
            ? { ...item, count: item.count + 1 } : item)
      };
    case 'DECREMENT':
      return {
        ...state, cart: state.cart.map(item => item.id === action.payload && item.count > 1 ? { ...item, count: item.count - 1 } : item)
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const increment = (id) => {
    dispatch({ type: 'INCREMENT', payload: id });
  };

  const decrement = (id) => {
    dispatch({ type: 'DECREMENT', payload: id });
  };

  return (
    <CartContext.Provider value={{
      cart: state.cart,
      addToCart,
      removeFromCart,
      increment,
      decrement
    }}>
      {children}
    </CartContext.Provider>
  );
}