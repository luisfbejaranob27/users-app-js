import { FormUser } from '../form-user/FormUser.jsx';
import PropTypes from 'prop-types';
import './ModalFormUser.css';

export const ModalFormUser = ({ handleAddUser, userSelected, handleEditUser, activeForm, handleResetForm }) => {
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
                <FormUser handleAddUser={handleAddUser} userSelected={userSelected} handleEditUser={handleEditUser} activeForm={activeForm} handleResetForm={handleResetForm} />
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
  activeForm: PropTypes.bool.isRequired,
  handleResetForm: PropTypes.func.isRequired
};
