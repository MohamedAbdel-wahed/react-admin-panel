import './featured.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

function Featured() {
  return (
    <section className="featured">
      <div className="top">
        <span className="title">total revenue</span>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>

      <div className="center">
        <div>progress</div>
        <span className='subtitle'>total sales made </span>
        <span className='count'>$450</span>
        <p className='note'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          obcaecati.
        </p>
      </div>

      <div className="bottom">
        <h4>target</h4>
        <div>
          <KeyboardArrowDownIcon />
          <span>$12.4K</span>
        </div>
        <div>
          <h4>last week</h4>
          <div>
            <KeyboardArrowUpIcon />
            <span>$12.4K</span>
          </div>
        </div>
        <div>
          <h4>last month</h4>
          <div>
            <KeyboardArrowDownIcon />
            <span>$12.4K</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured