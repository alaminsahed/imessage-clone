import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import "./Message.css";
import { forwardRef } from 'react';


const Message = forwardRef(
    (
        { id, content: { timestamp, displayName, email, message, photo, uid } },
        ref
    ) => {
        const user = useSelector(state => state.user.user);

        return (
            <div
                ref={ref}
                className={`message ${user.email === email && 'message_sender'}`}
            >
                <Avatar src={photo} />
                <p>{message}</p>
                <small>
                    {new Date(timestamp?.toDate()).toLocaleTimeString()}
                </small>
            </div>
        );
    }
);


export default Message;