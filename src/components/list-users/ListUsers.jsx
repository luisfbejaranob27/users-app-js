import { RowUser } from './row-user/RowUser.jsx';
import PropTypes from 'prop-types';
import './ListUsers.css';

export const ListUsers = ({ users, handlerSelectUser, handleRemoveUser }) => {
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
                <RowUser key={user.id} user={user} handlerSelectUser={handlerSelectUser} handleRemoveUser={handleRemoveUser} />
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
  handlerSelectUser: PropTypes.func.isRequired,
  handleRemoveUser: PropTypes.func.isRequired
};
