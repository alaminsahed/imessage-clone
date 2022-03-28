import React, { useState } from 'react';
import "./Chat.css"
const Chat = () => {
    const [input, setInput] = useState(" ")
    const sendMessage = (e) => {
        e.preventDefault();
        setInput(" ");
    }
    return (
        <div className='chat'>
            <div className="chat_header">

                <h4>
                    To:<span className='chat_name'>Channel Name</span>
                </h4>
                <strong>Details</strong>
            </div>
            <div className="chat_messages">
                <h1>chat message</h1>
                <h1>chat message</h1>
                <h1>chat message</h1>
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