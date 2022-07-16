import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Login, AppRegistration, Contacts } from "@mui/icons-material";
import { Button, Grid, Container } from "@mui/material";
import l from "./Layout.module.css";
import UserMenu from "..//UserMenu";
import { authSelectors } from "..//../redux/auth";

const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Grid
        sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
        elevation={3}
        className={l.boxColor}
      >
        <Grid className={l.navigate}>
          {!isLoggedIn && (
            <Grid
              container
              direction="row"
              justifyContent="end"
              alignItems="center"
              gap={4}
            >
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

          {isLoggedIn && (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={4}
            >
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
