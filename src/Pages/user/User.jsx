import { useUsers } from '../../hooks/useUsers.js';
import { ListUsers } from '../../components/list-users/ListUsers.jsx';
import { ModalFormUser } from '../../components/modal-form-user/ModalFormUser.jsx';

export const User = () => {
  const { users, userSelected, activeForm, handleActiveForm, handleAddUser, handlerSelectUser, handleEditUser, handleRemoveUser, handleResetForm } = useUsers();

  return (
    <>
      <div className={'container-fluid'}>
        <div className={'row main-app'}>
          <div className={'col'}>
            {users?.length > 0 ? (
              <ListUsers users={users} handlerSelectUser={handlerSelectUser} handleRemoveUser={handleRemoveUser} handleActiveFrom={handleActiveForm} />
            ) : (
              <div className="alert alert-warning">No registered users there</div>
            )}
          </div>
        </div>
        {!activeForm || <ModalFormUser handleAddUser={handleAddUser} userSelected={userSelected} handleEditUser={handleEditUser} handleResetForm={handleResetForm} />}
      </div>
    </>
  );
};
