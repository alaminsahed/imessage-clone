import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./App.css"

import Imessage from './Components/Imessage/Imessage';
import Login from './Components/Login/Login';
import { logout, login } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // manage user login and logout
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email,
          photo: user.photoURL,
          displayName: user.displayName
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, [])
  return (
    <div className="app">
      {
        user ? <Imessage /> : <Login />
      }

    </div>
  );
}

export default App;
