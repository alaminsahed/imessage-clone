import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from '../../features/chatSlice';
import db from '../../firebase';
import Message from '../Message/Message';
import "./Chat.css"
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';

const Chat = () => {
    const user = useSelector(state => state.user.user);
    const [input, setInput] = useState(" ")
    const chatName = useSelector(selectChatName);
    const chatId = useSelector(selectChatId)
    const [message, setMessage] = useState([]);


    useEffect(() => {
        if (chatId) {
            db.collection('chats').doc(chatId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
                setMessage(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            }
            )
        }
    }, [chatId])

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('chats').doc(chatId).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            uid: user.uid,
            photo: user.photo,
            email: user.email,
            displayName: user.displayName
        })
        setInput(" ");
    }
    return (
        <div className='chat'>
            <div className="chat_header">

                <h4>
                    To:<span className='chat_name'>{chatName}</span>
                </h4>
                <strong>Details</strong>
            </div>
            <div className="chat_messages">
                <FlipMove className="flip-wrapper">
                    {
                        message.map(({ id, data }) => (
                            <Message key={id} id={id} content={data} />
                        ))
                    }
                </FlipMove>
            </div>

            <div className='chat_input'>
                <form action="">
                    <input value={input} type="text" placeholder='Message' onChange={(e) => setInput(e.target.value)} />
                    <button onClick={sendMessage}>send</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;