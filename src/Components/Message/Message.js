import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import "./Message.css";

const Message = ({ id, content: { photo, message, timestamp } }) => {

    const user = useSelector(state => state.user.user);
    return (
        <div className='message'>
            <Avatar src={photo} />
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    );
};

export default Message;