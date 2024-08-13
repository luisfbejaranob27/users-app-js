import PropTypes from 'prop-types';
import { RowUser } from './row-user/RowUser.jsx';
import './ListUsers.css';

export const ListUsers = ({ users, handleRemoveFromCart }) => {
  return (
    <>
      <h3>Users:</h3>
      <div className={'row list-users'}>
        <div className={'col'}>
          <table className={'table table-responsive table-dark table-hover'}>
            <thead>
              <tr>
                <th className={'col-3'}>Name</th>
                <th className={'col-2'}>Username</th>
                <th className={'col-3'}>Email</th>
                <th className={'col-2'}>Role</th>
                <th className={'col-2'}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <RowUser key={user.id} user={user} handleRemoveFromCart={handleRemoveFromCart} />
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

ListUsers.propTypes = {
  users: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired
};
