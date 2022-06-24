import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import backImg from "./back.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "..//../redux/api/usersApi";
import {Login, AppRegistration} from '@mui/icons-material';
import { Button, Grid, Container } from "@mui/material";

import l from "./Layout.module.css";
import UserMenu from "..//UserMenu";

const Layout = () => {
  // const { data: user } = useGetUsersQuery();
  const token = useSelector((state) => state.token);

useEffect(()=>{

},[])

  return (
    <>
      <Grid sx={{ position: "fixed", top: 0, left: 0, right: 0 }} elevation={3} className={l.boxColor}>
        <Grid className={l.navigate}>
          {!token && (
            <Grid container direction="row" justifyContent="end" alignItems="center" gap={4}>
              <Button variant="contained" color="success">
                <NavLink to="/users/signup" className={l.nav}>
                  <AppRegistration/>Register
                </NavLink>
              </Button>
              <Button variant="contained" color="success">
                <NavLink to="/users/login" className={l.nav}>
                  <Login/>LogIn
                </NavLink>
              </Button>
            </Grid>
          )}

          {token !== "" && (
            <Grid container direction="row" justifyContent="space-between" alignItems="center" gap={4}>
              <NavLink to="/contacts" className={l.link}>
                Your contacts
              </NavLink>
              <div className={l.link}>
              <UserMenu />

              </div>

              {/* <NavLink to="/users/current" className={l.link}>
                <UserMenu />
              </NavLink> */}
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid className={l.paddingTop}>
        <Container>
          <Outlet />
        </Container>
      </Grid>
    </>
  );
};

export default Layout;
