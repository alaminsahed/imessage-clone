import { Avatar } from '@mui/material';
import React from 'react';
import './sidebarChat.css'
import { useDispatch } from 'react-redux';
import { setChat } from '../../../features/chatSlice';

const SidebarChat = ({ id, chatName }) => {
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(setChat({
            chatId: id,
            chatName: chatName
        }))} className='sideChat'>
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