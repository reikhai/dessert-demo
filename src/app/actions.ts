// Define action types as string literals
type AddToCart = { type: 'ADD_TO_CART', payload: any;};
type RemoveItem = { type: 'REMOVE_ITEM', payload: any;};

// Action creators
export const addItem = (product: any): AddToCart => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeItem = (product: any): RemoveItem => ({
  type: 'REMOVE_ITEM',
  payload: product,
});




  