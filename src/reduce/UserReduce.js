import { userActions } from './UserActions.js';

export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActions.ADD_USER:
      return [...state, payload];
    case userActions.EDIT_USER:
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...payload
          };
        }
        return user;
      });
    case userActions.REMOVE_USER:
      return state.filter((user) => user.id !== payload);
    default:
      return state;
  }
};
