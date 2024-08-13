import PropTypes from 'prop-types';
import './RowUser.css';

export const RowUser = ({ user, handleRemoveFromCart }) => {
  const { id, name, username, email, role } = user;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td className={'row-actions'}>
          <button className={'btn btn-warning'} onClick={() => handleRemoveFromCart(id)}>
            <span className="material-symbols-outlined">edit</span>
          </button>
          <button className={'btn btn-danger'} onClick={() => handleRemoveFromCart(id)}>
            <span className={'material-symbols-outlined'}>delete</span>
          </button>
        </td>
      </tr>
    </>
  );
};

RowUser.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }),
  handleRemoveFromCart: PropTypes.func.isRequired
};
