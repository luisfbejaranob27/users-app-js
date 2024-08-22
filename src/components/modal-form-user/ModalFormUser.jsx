import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import { FormUser } from '../form-user/FormUser.jsx';
import './ModalFormUser.css';

export const ModalFormUser = () => {
	const { handleAddUser, userSelected, handleEditUser, activeForm, handleResetForm } = useContext(UserContext);
	return (
		<>
			<div className={'bg-modal fadeIn'}>
				<div className={'modal'} style={{ display: 'block' }} tabIndex={-1}>
					<div className={'modal-dialog'}>
						<div className={'modal-content'}>
							<div className={'modal-header'}>
								<h3 className={'modal-title'}>{userSelected.id !== '' ? 'Edit' : 'Create'}</h3>
							</div>
							<div className={'modal-body'}>
								<FormUser
									handleAddUser={handleAddUser}
									userSelected={userSelected}
									handleEditUser={handleEditUser}
									activeForm={activeForm}
									handleResetForm={handleResetForm}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
