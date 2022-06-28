import { Outlet } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Login, AppRegistration, Contacts } from "@mui/icons-material";
import { Button, Grid, Container } from "@mui/material";

import l from "./Layout.module.css";
import UserMenu from "..//UserMenu";

const Layout = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.token);

  // useEffect(() => {
  //   if(!token || token ===''){
  //     navigate("/", { replace: true });
  //   }
  // }, []);

  return (
    <>
      <Grid sx={{ position: "fixed", top: 0, left: 0, right: 0 }} elevation={3} className={l.boxColor}>
        <Grid className={l.navigate}>
          {!token && (
            <Grid container direction="row" justifyContent="end" alignItems="center" gap={4}>
              <Button variant="contained" color="success">
                <NavLink to="/users/signup" className={l.nav}>
                  <AppRegistration />
                  Register
                </NavLink>
              </Button>
              <Button variant="contained" color="success">
                <NavLink to="/users/login" className={l.nav}>
                  <Login />
                  LogIn
                </NavLink>
              </Button>
            </Grid>
          )}

          {token && (
            <Grid container direction="row" justifyContent="space-between" alignItems="center" gap={4}>
              <NavLink to="/contacts" className={l.nav}>
                <Contacts />
                Your contacts
              </NavLink>
              <div className={l.link}>
                <UserMenu />
              </div>
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
