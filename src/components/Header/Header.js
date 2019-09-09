import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.scss';

import Searchbar from '../Searchbar';

const Header = ({ query, onChange, onSubmit }) => (
  <header className="header">
    <div className="box">
      <Link className="link" to="/">
        <img
          className="logo"
          src="https://meli-challenge.s3.amazonaws.com/Logo_ML%402x.png"
          alt="logo"
        />
      </Link>
      <Searchbar query={query} onChange={onChange} onSubmit={onSubmit} />
    </div>
  </header>
);

Header.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

Header.defaultProps = {
  query: '',
  history: {},
};

export default Header;
