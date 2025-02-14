import { CartItem } from './types'; // Import the CartItem type

// Define the shape of the CartState
interface CartState {
  cartInfo: CartItem[];
}

// Define the initial state
const initialState: CartState = {
  cartInfo: [],
};

const cartReducer = (state = initialState, action: any) => {
  // Retrieve cart items from localStorage
  let getLocalStorageCartItems = localStorage.getItem('cartItems');

  // Check if the cart items exist in localStorage
  if (getLocalStorageCartItems) {
    const cartItems = JSON.parse(getLocalStorageCartItems);
    state = cartItems;
  }

  switch (action.type) {
    case 'ADD_TO_CART':
      let addedItemArr = {
        ...state, // Keep the existing state
        cartInfo: [...state.cartInfo, action.payload],
      };

      localStorage.setItem('cartItems', JSON.stringify(addedItemArr));

      return addedItemArr
    case 'REMOVE_ITEM':
      let removeItemArr = {
        ...state, // Keep the existing state
        cartInfo: state.cartInfo.filter(item => item.id !== action.payload.id),
      };

      localStorage.setItem('cartItems', JSON.stringify(removeItemArr));
      
      return removeItemArr
    default:
      return state;
  }
};

export default cartReducer;


