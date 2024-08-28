import { userActions } from './Actions.js';

export const userReducer = (state, action) => {
	const { users } = state;
	const { type, payload } = action;
	switch (type) {
		case userActions.FETCH_SUCCESS:
			return { ...state, users: payload };
		case userActions.ADD_USER:
			return { ...state, users: [...users, payload] };
		case userActions.EDIT_USER:
			return {
				...state,
				users: users.map((user) => {
					if (user.id === payload.id) {
						return {
							...payload
						};
					}
					return user;
				})
			};
		case userActions.REMOVE_USER:
			return { ...state, users: users.filter((user) => user.id !== payload) };
		default:
			return state;
	}
};
