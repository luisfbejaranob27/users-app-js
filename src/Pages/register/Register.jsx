import { FormUser } from '../../components/form-user/FormUser.jsx';
import PropTypes from 'prop-types';
import './Register.css';

export const Register = ({ userSelected, activeForm, handleAddUser, handleResetForm }) => {
  return (
    <>
      <div className={'row'}>
        <div className={'col'}>
          <div className={'register'}>
            <div className={'card'}>
              <div className={'card-header'}>
                <h3 className={'card-title'}>Register</h3>
              </div>
              <div className={'card-body'}>
                <FormUser handleAddUser={handleAddUser} userSelected={userSelected} activeForm={activeForm} handleResetForm={handleResetForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Register.propTypes = {
  userSelected: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }).isRequired,
  activeForm: PropTypes.bool.isRequired,
  handleAddUser: PropTypes.func.isRequired,
  handleResetForm: PropTypes.func.isRequired
};
