import { FormUser } from '../form-user/FormUser.jsx';
import PropTypes from 'prop-types';

export const ModalFormUser = ({ handleAddUser, userSelected, handleEditUser, handleResetForm }) => {
  return (
    <>
      <div className={'bg-modal fadeIn'}>
        <div className="modal" style={{ display: 'block' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{userSelected.id !== '' ? 'Edit' : 'Create'}</h5>
              </div>
              <div className="modal-body">
                <FormUser handleAddUser={handleAddUser} userSelected={userSelected} handleEditUser={handleEditUser} handleResetForm={handleResetForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ModalFormUser.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  userSelected: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string
  }),
  handleEditUser: PropTypes.func.isRequired,
  handleResetForm: PropTypes.func.isRequired
};
