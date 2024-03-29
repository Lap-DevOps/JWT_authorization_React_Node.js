import React, { useContext, useEffect, useState } from 'react';
import LoginForm from './components/LoginForm';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';
import UserService from './services/UserService';



function App() {

  const { store } = useContext(Context);
  const [ users, setUsers  ] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  async function getUsers() {
    
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  if (store.isLoading) {
    return <div>Loading...</div>
  }

  if (!store.isAuth) {
    return(
      <div>
      <h1 style={{textAlign: 'center'}}>Login</h1>
    <LoginForm />
    <button onClick={getUsers}>User list</button>
    </div>
    );
  }

  return (
    <div >
      <h1 style={{textAlign: 'center'}}>{store.isAuth ? `User ${store.user.email} is logged in` : 'Login'}</h1>
      <h1>{store.user.isActivated ? 'Activated' : 'Not activated'}</h1>
      
        <button onClick={() => store.logout()}>Logout</button>

        <div>
          <button onClick={getUsers}>User list</button>
        </div>
        {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
    </div>
    
  );
}

export default observer(App);
