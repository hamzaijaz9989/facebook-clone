import React from 'react'
import "./Header.css"
import FB from "../src/FB.png";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';
function Header() {
    const [{user}, dispatch] = useStateValue()
  return (<>

    <div className='header'>
    <div className='header_left'>
        <img src={FB}/>
        <div className='header_input'>
        <SearchIcon/>
        <input type={'text'} placeholder="Search here..."/>
    </div></div>
    <div className='header_middle'>
        <div className='header_option header_option_active'>
        <HomeIcon fontSize='large'/>

        </div>
        <div className='header_option '>
        <FlagIcon fontSize='large'/>

        </div>
        <div className='header_option '>
        <SubscriptionsOutlinedIcon  fontSize='large'/>

        </div>
        <div className='header_option '>
        <StorefrontOutlinedIcon fontSize='large'/>

        </div>
        <div className='header_option '>
        <SupervisedUserCircleIcon fontSize='large'/>

        </div>
    </div>
    <div className='header_right'>
        <div className='header_info'>
            <Avatar src={user.photoURL}/>
            <h4>{user.displayName}</h4>
        </div>
        <IconButton>
            <AddIcon/>
        </IconButton>

        <IconButton>
            <ForumIcon/>
        </IconButton>

        <IconButton>
            <NotificationsActiveIcon/>
        </IconButton>

        <IconButton>
            <ExpandMoreIcon/>
        </IconButton>


    </div>
    </div>
    </>
  )
}

export default Header