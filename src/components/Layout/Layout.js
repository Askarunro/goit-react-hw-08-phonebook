import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import backImg from "./back.png";
import { useSelector  } from "react-redux";
import { useGetUsersQuery } from "..//../redux/api/usersApi";

import l from "./Layout.module.css";
import UserMenu from '..//UserMenu'

const Layout = () => {
  const token = useSelector((state) => state.token);
  // const { data: user } = useGetUsersQuery();

  return (
    <>
      <nav className={l.navigate}>
        
        {!token && <div>
          <NavLink to="/users/signup" className={l.link}>
          Register
        </NavLink>
        <NavLink to="/users/login" className={l.link}>
          LogIn
        </NavLink>
        </div>
        }
      </nav>
      {token!=="" && <div>

      <NavLink to="/contacts" className={l.link}>
      contacts
        </NavLink>
        <NavLink to="/users/current" className={l.link}>
        <UserMenu/>
        </NavLink>
      
        </div>}
      
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
