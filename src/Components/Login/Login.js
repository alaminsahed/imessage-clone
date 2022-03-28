import React from 'react';
import "./Login.css"
import { Button } from '@mui/material';
import { auth, provider } from '../../firebase';


const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login_logo'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzhKvw4sZcK3t2ihfVuerdAu6mwBEHPS3rA&usqp=CAU" alt="logo" />
                <h1>IMessage</h1>
            </div>
            <Button onClick={signIn}>SignIn</Button>
        </div>
    );
};

export default Login;