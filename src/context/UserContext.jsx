import { createContext } from 'react';
import { useUsers } from '../hooks/useUsers.js';
import PropTypes from 'prop-types';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
	const {
		users,
		userSelected,
		activeForm,
		handleActiveForm,
		handleAddUser,
		handlerSelectUser,
		handleEditUser,
		handleRemoveUser,
		handleResetForm
	} = useUsers();

	return (
		<UserContext.Provider
			value={{
				users,
				userSelected,
				activeForm,
				handleActiveForm,
				handleAddUser,
				handlerSelectUser,
				handleEditUser,
				handleRemoveUser,
				handleResetForm
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired
};
