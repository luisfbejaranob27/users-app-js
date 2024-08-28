import axios from 'axios';
import { loginInitialState } from '../data/LoginInitialState.js';
import { ApiError } from '../exceptions/ApiError.js';

export const getUsers = async () => {
	try {
		const response = await axios.get('http://localhost:8080/api/users');
		return response.data;
	} catch (e) {
		handleException(e);
		throw e;
	}
};

export const getAuthenticatedUser = () => {
	return JSON.parse(sessionStorage.getItem('auth')) || loginInitialState;
};

export const getUserByUsername = async (username) => {
	try {
		const response = await axios.get(`http://localhost:8080/api/users/username/${username}`);
		return response.data;
	} catch (e) {
		handleException(e);
		throw e;
	}
};

export const create = async (user) => {
	try {
		const response = await axios.post('http://localhost:8080/api/users', user);
		return response.data;
	} catch (e) {
		handleException(e);
		throw e;
	}
};

export const update = async (user) => {
	try {
		const { id } = user;
		const response = await axios.put(`http://localhost:8080/api/users/${id}`, user);
		return response.data;
	} catch (e) {
		handleException(e);
		throw e;
	}
};

export const deleteById = async (id) => {
	try {
		await axios.delete(`http://localhost:8080/api/users/${id}`);
	} catch (e) {
		handleException(e);
		throw e;
	}
};

const handleException = (e) => {
	if (e.response) {
		console.log('e.response');
		console.log(e.response);
		throw new ApiError(e.response.data.message, e.response.data.errors);
	} else if (e.request) {
		console.error('Error request:', e.request);
	} else {
		console.error('Error message:', e.message);
	}
};

export const existsUserByUsername = async (username) => {
	const response = await axios.get(`http://localhost:8080/api/users/exists/username/${username}`);
	return response.data;
};

export const existUserByEmail = async (email) => {
	const response = await axios.get(`http://localhost:8080/api/users/exists/email/${email}`);
	return response.data;
};
