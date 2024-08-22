import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import { ListUsers } from '../../components/list-users/ListUsers.jsx';
import { ModalFormUser } from '../../components/modal-form-user/ModalFormUser.jsx';

export const User = () => {
	const { users, activeForm } = useContext(UserContext);

	return (
		<>
			<div className={'row main-app'}>
				<div className={'col'}>
					{users?.length > 0 ? <ListUsers /> : <div className="alert alert-warning">No registered users there</div>}
				</div>
			</div>
			{!activeForm || <ModalFormUser />}
		</>
	);
};
