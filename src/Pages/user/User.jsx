import { ListUsers } from '../../components/list-users/ListUsers.jsx';
import { ModalFormUser } from '../../components/modal-form-user/ModalFormUser.jsx';
import PropTypes from 'prop-types';

export const User = ({ users, userSelected, activeForm, handleActiveForm, handleAddUser, handlerSelectUser, handleEditUser, handleRemoveUser, handleResetForm }) => {
  return (
    <>
      <div className={'row main-app'}>
        <div className={'col'}>
          {users?.length > 0 ? (
            <ListUsers users={users} handlerSelectUser={handlerSelectUser} handleRemoveUser={handleRemoveUser} handleActiveFrom={handleActiveForm} />
          ) : (
            <div className="alert alert-warning">No registered users there</div>
          )}
        </div>
      </div>
      {!activeForm || <ModalFormUser handleAddUser={handleAddUser} userSelected={userSelected} handleEditUser={handleEditUser} activeForm={activeForm} handleResetForm={handleResetForm} />}
    </>
  );
};

User.propTypes = {
  users: PropTypes.array.isRequired,
  userSelected: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string
  }).isRequired,
  activeForm: PropTypes.bool.isRequired,
  handleActiveForm: PropTypes.func.isRequired,
  handleAddUser: PropTypes.func.isRequired,
  handlerSelectUser: PropTypes.func.isRequired,
  handleEditUser: PropTypes.func.isRequired,
  handleRemoveUser: PropTypes.func.isRequired,
  handleResetForm: PropTypes.func.isRequired
};
