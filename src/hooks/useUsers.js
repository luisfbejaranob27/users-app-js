import { useReducer, useState } from 'react';
import { create, deleteById, getUsers, update } from '../services/UserService.js';
import { useNavigate } from 'react-router-dom';
import { userReducer } from '../reduce/UserReduce.js';
import { userInitialState } from '../data/UserInitialState.js';
import { userActions } from '../reduce/Actions.js';
import { alert } from '../alerts/Alert.js';
import { alertConfirm } from '../alerts/AlertConfirm.js';
import { usersInitialState } from '../data/UsersInitialState.js';

export const useUsers = () => {
	const [state, dispatch] = useReducer(userReducer, usersInitialState);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState([]);
	const [userSelected, setUserSelected] = useState(userInitialState);
	const [activeForm, setActiveForm] = useState(false);
	const navigate = useNavigate();

	async function fetchUsers() {
		setLoading(true);
		try {
			const users = await getUsers();
			dispatch({
				type: userActions.FETCH_SUCCESS,
				payload: users
			});
		} catch (e) {
			setErrors([e.message]);
			dispatch({
				type: userActions.FETCH_ERROR,
				payload: e.message
			});
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}
	}

	function handleActiveForm(value) {
		setActiveForm(value);
	}

	async function handleAddUser(user) {
		try {
			const userCreated = await create(user);
			dispatch({
				type: userActions.ADD_USER,
				payload: userCreated
			});
			alert('User created', 'The user has been created successfully', errors, 'success');
			handleActiveForm(false);
			setErrors([]);
			navigate('/users');
		} catch (e) {
			setErrors(e.errors);
		}
	}

	function handlerSelectUser(user) {
		setUserSelected(user);
		handleActiveForm(true);
	}

	async function handleEditUser(user) {
		try {
			const userUpdated = await update(user);
			dispatch({
				type: userActions.EDIT_USER,
				payload: userUpdated
			});
			alert('Updated user', 'The user has been successfully updated', errors, 'success');
			handleActiveForm(false);
			setErrors([]);
		} catch (e) {
			setErrors(e.errors);
		}
	}

	function handleRemoveUser(id) {
		try {
			alertConfirm(
				'Are you sure?',
				"You won't be able to revert this!",
				'warning',
				deleteById,
				dispatch,
				{
					type: userActions.REMOVE_USER,
					payload: id
				},
				'Deleted!',
				'user',
				'delete'
			);
		} catch (e) {
			setErrors([e.message]);
		}
	}

	function handleResetForm() {
		setUserSelected(userInitialState);
		handleActiveForm(false);
	}

	return {
		state,
		loading,
		errors,
		setErrors,
		userSelected,
		activeForm,
		fetchUsers,
		handleActiveForm,
		handleAddUser,
		handlerSelectUser,
		handleEditUser,
		handleRemoveUser,
		handleResetForm
	};
};
