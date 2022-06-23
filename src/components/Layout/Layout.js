import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import backImg from "./back.png";
import l from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <nav className={l.navigate}>
        <NavLink to="/users/signup" className={l.link}>
          Register
        </NavLink>
        <NavLink to="/users/login" className={l.link}>
          LogIn
        </NavLink>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;
