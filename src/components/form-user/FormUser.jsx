import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext.jsx';
import { userInitialState } from '../../data/UserInitialState.js';
import { roles } from './Roles.js';
import { existsUserByUsername, existUserByEmail } from '../../services/UserService.js';
import { alert } from '../../alerts/Alert.js';
import './FormUser.css';

export const FormUser = () => {
	const { handleAddUser, userSelected, handleEditUser, activeForm, handleResetForm } = useContext(UserContext);
	const [formValues, setFormValues] = useState(userInitialState);
	const { id, name, username, password, email, role } = formValues;
	const navigate = useNavigate();
	console.log(formValues);

	useEffect(() => {
		setFormValues(userSelected);
	}, [userSelected]);

	const handleChange = ({ target }) => {
		const { name, value } = target;

		setFormValues({
			...formValues,
			[name]: value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const usernameFound = existsUserByUsername(username);
		console.log(usernameFound);
		const emailFound = existUserByEmail(email);

		if (id === '' && usernameFound) {
			alert('Oops...', 'A user is already registered with the username', 'error');
			return;
		}

		if (id === '' && emailFound) {
			alert('Oops...', 'A user is already registered with the email', 'error');
			return;
		}

		if (!name || !username || !password || !email || !role) {
			alert('Oops...', 'Please complete the form fields', 'error');
			return;
		}

		let user;
		if (id !== '') {
			handleEditUser({ ...formValues });
		} else {
			user = {
				...formValues,
				id: crypto.randomUUID()
			};

			handleAddUser(user);
		}
		handleResetForm();
		navigate('/users');
	};

	const handleCancelForm = () => {
		handleResetForm();
		navigate('/users');
	};

	return (
		<>
			<form className={'form-user'} onSubmit={handleSubmit}>
				<div className={'row'}>
					<div className={'col-6'}>
						<label htmlFor={'name'} className={'form-label'}>
							Name:
						</label>
						<input type={'text'} className={'form-control'} id={'name'} name={'name'} value={name} onChange={handleChange} />
					</div>
					<div className={'col-6'}>
						<label htmlFor={'username'} className={'form-label'}>
							Username:
						</label>
						<input type={'text'} className={'form-control'} id={'username'} name={'username'} value={username} onChange={handleChange} />
					</div>
					<div className={'col-6'}>
						<label htmlFor={'password'} className={'form-label'}>
							Password:
						</label>
						<input
							type={'password'}
							className={'form-control'}
							id={'password'}
							name={'password'}
							value={password}
							onChange={handleChange}
						/>
					</div>
					<div className={'col-6'}>
						<label htmlFor={'email'} className={'form-label'}>
							Email:
						</label>
						<input type={'email'} className={'form-control'} id={'email'} name={'email'} value={email} onChange={handleChange} />
					</div>
					{activeForm ? (
						<div className={'col'}>
							<label htmlFor="role" className={'form-label'}>
								Role:
							</label>
							<select className={'form-select'} aria-label={'role'} name={'role'} value={role} onChange={handleChange}>
								<option value={''}>Select role</option>
								{roles.map((role) => (
									<option key={role.id} value={role.name}>
										{role.name}
									</option>
								))}
							</select>
						</div>
					) : (
						''
					)}
				</div>
				<div className={'row'}>
					<div className={'col form-buttons'}>
						<button type={'submit'} className={'btn btn-primary'}>
							Save
						</button>
						<button type={'button'} className={'btn btn-secondary'} onClick={handleCancelForm}>
							Cancel
						</button>
					</div>
				</div>
			</form>
		</>
	);
};
