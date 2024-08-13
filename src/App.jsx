import { ListUsers } from './components/list-users/ListUsers.jsx';
import { FormUser } from './components/form-user/FormUser.jsx';
import './App.css';

function App() {
  const sample = [
    {
      id: 'f1073560-ef30-4e78-b2dc-873db7f1f151',
      name: 'Luis Ferley Bejarano Buritica',
      username: 'luisfbejaranob',
      password: 'B3j6r@n0',
      email: 'luisfbejaranob@outlook.com',
      role: 'Administrator'
    }
  ];

  function handleRemoveFromCart() {}

  return (
    <>
      <div className={'container-fluid'}>
        <div className={'row main-app'}>
          <div className={'col'}>
            <ListUsers users={sample} handleRemoveFromCart={handleRemoveFromCart} />
          </div>
          <div className={'col'}>
            <FormUser />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
