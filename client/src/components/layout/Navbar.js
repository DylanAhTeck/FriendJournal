import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <h2>
          <li>
            <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
          </li>
        </h2>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Friend Journal',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;
