import './featured.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
        <div className="progress">
          <CircularProgressbar value={70} text={`70%`} strokeWidth={5} />;
        </div>
        <span className="subtitle">total sales made today</span>
        <span className="count">$450</span>
        <p className="note">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          obcaecati.
        </p>
      </div>

      <div className="bottom">
        <div className="item">
          <h4 className="title">target</h4>
          <div className="count" style={{ color: "#fca5a5" }}>
            <KeyboardArrowDownIcon />
            <span>$12.4K</span>
          </div>
        </div>

        <div className="item">
          <h4 className="title">last week</h4>
          <div className="count" style={{ color: "#166534" }}>
            <KeyboardArrowUpIcon />
            <span>$12.4K</span>
          </div>
        </div>

        <div className="item">
          <h4 className="title">last month</h4>
          <div className="count" style={{ color: "#fca5a5" }}>
            <KeyboardArrowDownIcon />
            <span>$12.4K</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured