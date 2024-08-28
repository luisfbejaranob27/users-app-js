import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import { ListUsers } from '../../components/list-users/ListUsers.jsx';
import { ModalFormUser } from '../../components/modal-form-user/ModalFormUser.jsx';

export const User = () => {
	const {
		state: { users },
		loading,
		errors,
		activeForm,
		fetchUsers
	} = useContext(UserContext);
	console.log(errors);

	useEffect(() => {
		fetchUsers();
	}, []);

	if (loading && users.length > 0) {
		return <div className="alert alert-warning">Loading users...</div>;
	}

	if (users.length === 0) {
		return <div className="alert alert-warning">{errors.length > 0 ? errors : 'Users not found'} </div>;
	}

	return (
		<>
			<div className={'row main-app'}>
				<div className={'col'}>
					{users.length > 0 && <ListUsers />}
				</div>
			</div>
			{!activeForm || <ModalFormUser />}
		</>
	);
};
