import { useEffect, useReducer, useState } from 'react';
import { getUsers } from '../services/UserService.js';
import { userReducer } from '../reduce/UserReduce.js';
import { userInitialState } from '../data/UserInitialState.js';
import { userActions } from '../reduce/Actions.js';
import { alert } from '../alerts/Alert.js';
import { alertConfirm } from '../alerts/AlertConfirm.js';

export const useUsers = () => {
	const usersInitialState = getUsers();
	const [users, dispatch] = useReducer(userReducer, usersInitialState);
	const [userSelected, setUserSelected] = useState(userInitialState);
	const [activeForm, setActiveForm] = useState(false);

	function handleActiveForm(value) {
		setActiveForm(value);
	}

	function handleAddUser(user) {
		dispatch({
			type: userActions.ADD_USER,
			payload: user
		});
		alert('User created', 'The user has been created successfully', 'success');
	}

	function handlerSelectUser(user) {
		setUserSelected(user);
		handleActiveForm(true);
	}

	function handleEditUser(user) {
		dispatch({
			type: userActions.EDIT_USER,
			payload: user
		});
		alert('Updated user', 'The user has been successfully updated', 'success');
	}

	function handleRemoveUser(id) {
		alertConfirm(
			'Are you sure?',
			"You won't be able to revert this!",
			'warning',
			dispatch,
			{
				type: userActions.REMOVE_USER,
				payload: id
			},
			'Deleted!',
			'user',
			'delete'
		);
	}

	function handleResetForm() {
		setUserSelected(userInitialState);
		handleActiveForm(false);
	}

	useEffect(() => {
		sessionStorage.setItem('users', JSON.stringify(users));
	}, [users]);

	return {
		users,
		userSelected,
		activeForm,
		handleActiveForm,
		handleAddUser,
		handlerSelectUser,
		handleEditUser,
		handleRemoveUser,
		handleResetForm
	};
};
