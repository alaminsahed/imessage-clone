import React from 'react';
import "./Sidebar.css"
import Avatar from '@mui/material/Avatar';
import { RateReviewOutlined, Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import SidebarChat from './SidebarChat/SidebarChat';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';

const Sidebar = () => {
    const photo = useSelector(state => state.user.user.photo);
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <Avatar src={photo} className='sidebar_avatar' onClick={() => auth.signOut()} />
                <div className="sidebar_input">
                    <Search />
                    <input type="text" placeholder='Search Here' />
                </div>
                <IconButton variant="outlined" className='sidebar_inputBtn'>
                    <RateReviewOutlined />
                </IconButton>
            </div>
            <div className="side_chat">
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
};

export default Sidebar;