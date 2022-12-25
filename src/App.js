import './App.css';
import { useState, useContext } from 'react';
import { useLogin } from "./hooks/useLogin";
import { useLogout } from "./hooks/useLogout"
import { AuthContext, authIsReady } from "./contexts/AuthContext"

import { ProfileCard } from './components/ProfileCard';

function App() {
  const { login, isPending } = useLogin();
  const { logout } = useLogout();

  const { user, authIsReady } = useContext(AuthContext);
  console.log(user)

  return authIsReady ? (
    <div className="App">
      {user ? (
      <ProfileCard user={user}/>
      ) : (<button onClick={login}>Login With Github</button>)}
      
    </div>
  ) : (
    <h3>Making your auth ready, please wait for a moment...</h3>
  )
}

export default App;
