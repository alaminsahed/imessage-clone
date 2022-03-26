import React from 'react';
import "./Sidebar.css"
import Avatar from '@mui/material/Avatar';
import { RateReviewOutlined, Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import SidebarChat from './SidebarChat/SidebarChat';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <Avatar className='sidebar_avatar' />
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