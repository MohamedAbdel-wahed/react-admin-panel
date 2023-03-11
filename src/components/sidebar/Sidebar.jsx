import './sidebar.scss'

import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2Icon from '@mui/icons-material/Person2';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="top">
        <LeaderboardIcon className='logo_icon'/>
        <span className="logo_text">MyAdmin Panel</span>
      </div>
      
      <div className="center">
        <ul>
          <p className="title">main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">lists</p>

          <li>
            <Person2Icon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StorefrontIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">useful</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">user</p>
          <li>
            <ManageAccountsIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color_option"></div>
        <div className="color_option"></div>
        <div className="color_option"></div>
      </div>
    </aside>
  )
}

export default Sidebar