import { Avatar } from '@mui/material';
import React from 'react';
import './sidebarChat.css'

const SidebarChat = ({ id, chatName }) => {
    return (
        <div className='sideChat'>
            <Avatar />
            <div className="sideChat_info">
                <h3>{chatName}</h3>
                <p>last message change...</p>
                <small>timestamp</small>
            </div>
        </div>
    );
};

export default SidebarChat;