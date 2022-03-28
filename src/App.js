import React from 'react';
import { useSelector } from 'react-redux';
import "./App.css"

import Imessage from './Components/Imessage/Imessage';
import userSlice from './features/userSlice';

function App() {
  const user = useSelector(state => state.user.user);
  console.log('user', user);
  return (
    <div className="app">
      {
        user ? <Imessage /> : <h1>Please login</h1>
      }

    </div>
  );
}

export default App;
