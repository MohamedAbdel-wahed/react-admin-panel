import './navbar.scss';

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="search_container">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <input type="search" placeholder='Search'/>
        </div>

        <div className="nav_links">
          <ul>
            <li>
              <IconButton>
                <LanguageOutlinedIcon />
              </IconButton>
            </li>

            <li>
              <IconButton>
                <DarkModeOutlinedIcon />
              </IconButton>
            </li>

            <li>
              <IconButton>
                <FullscreenExitOutlinedIcon />
              </IconButton>
            </li>

            <li>
              <IconButton>
                <NotificationsNoneOutlinedIcon />
                <span className='count'>9</span>
              </IconButton>
            </li>

            <li>
              <IconButton>
                <ChatBubbleOutlineOutlinedIcon />
                <span className='count'>20</span>
              </IconButton>
            </li>

            <li>
              <IconButton>
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="profile_image"
                  className="profile_image"
                />
              </IconButton>
            </li>

            <li>
              <IconButton>
                <ListOutlinedIcon />
              </IconButton>
            </li>

            <li>
              <IconButton>
                <SettingsOutlinedIcon />
              </IconButton>
            </li>

            <li>
              <IconButton>
                <InfoOutlinedIcon />
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar