import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css'

const satActive = ({ isActive }) =>isActive ? `${s.activeLink}` : `${s.link}`;

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={satActive}
      >
        Зареєструватися
      </NavLink>
      <NavLink
        to="/login"
        className={satActive}
      >
        Логін
      </NavLink>
    </div>
  );
}