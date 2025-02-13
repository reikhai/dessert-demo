// Define action types as string literals
type IncrementAction = { type: 'INCREMENT' };
type DecrementAction = { type: 'DECREMENT' };

// Action creators
export const increment = (): IncrementAction => ({
  type: 'INCREMENT',
});

export const decrement = (): DecrementAction => ({
  type: 'DECREMENT',
});

  