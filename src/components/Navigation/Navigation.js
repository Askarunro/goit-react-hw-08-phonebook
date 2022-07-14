import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

const satActive = ({ isActive }) =>isActive ? `${s.activeLink}` : `${s.link}`;

const Navigation = () => {
 
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className="navigation">
      <NavLink to="/" className={satActive}>
        Головна
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={satActive}>
          Контакти
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;