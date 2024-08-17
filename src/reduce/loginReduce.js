import { loginActions } from './Actions.js';

export const loginReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case loginActions.LOGIN:
    case loginActions.LOGOUT:
      return payload;
    default:
      return state;
  }
};
