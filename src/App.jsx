import { useUsers } from './hooks/useUsers.js';
import { ListUsers } from './components/list-users/ListUsers.jsx';
import { FormUser } from './components/form-user/FormUser.jsx';
import './App.css';

function App() {
  const { users, userSelected, handleAddUser, handlerSelectUser, handleEditUser, handleRemoveUser } = useUsers();

  return (
    <>
      <div className={'container-fluid'}>
        <div className={'row main-app'}>
          <div className={'col'}>
            {users?.length > 0 ? (
              <ListUsers users={users} handlerSelectUser={handlerSelectUser} handleRemoveUser={handleRemoveUser} />
            ) : (
              <div className="alert alert-warning">No registered users there</div>
            )}
          </div>
          <div>
            <button className={'btn btn-primary'}>Create</button>
          </div>
          <div className={'col'}>
            <FormUser users={users} handleAddUser={handleAddUser} userSelected={userSelected} handleEditUser={handleEditUser} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
