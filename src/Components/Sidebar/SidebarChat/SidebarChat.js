import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './sidebarChat.css'
import { useDispatch } from 'react-redux';
import { setChat } from '../../../features/chatSlice';
import db from '../../../firebase';

const SidebarChat = ({ id, chatName }) => {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);

    useEffect(() => {
        db.collection('chats')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setChatInfo(snapshot.docs.map((doc) => doc.data()))
            );
    }, [id]);


    return (
        <div onClick={() => dispatch(setChat({
            chatId: id,
            chatName: chatName
        }))} className='sideChat'>
            <Avatar src={chatInfo[0]?.photo} />
            <div className="sideChat_info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                <small>
                    {chatInfo[0]?.timestamp?.toDate().toLocaleTimeString()}


                </small>
            </div>
        </div>
    );
};

export default SidebarChat;