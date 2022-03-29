import { useState, useEffect } from 'react';
import "./Sidebar.css"
import Avatar from '@mui/material/Avatar';
import { RateReviewOutlined, Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import SidebarChat from './SidebarChat/SidebarChat';
import { useSelector } from 'react-redux';
import db, { auth } from '../../firebase';

const Sidebar = () => {
    const photo = useSelector(state => state.user.user.photo);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        //Listen firebase real time data.
        db.collection('chats').onSnapshot(snapshot => {
            // console.log(snapshot.docs)
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    })

    const addChat = () => {
        const chatName = prompt("Enter chat name");
        db.collection('chats').add({
            chatName: chatName
        })
    }
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <Avatar src={photo} className='sidebar_avatar' onClick={() => auth.signOut()} />
                <div className="sidebar_input">
                    <Search />
                    <input type="text" placeholder='Search Here' />
                </div>
                <IconButton variant="outlined" className='sidebar_inputBtn' onClick={addChat}>
                    <RateReviewOutlined />
                </IconButton>
            </div>
            <div className="side_chat">
                {chats.map(({ id, data: { chatName } }) => (
                    <SidebarChat key={id} id={id} chatName={chatName} />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;