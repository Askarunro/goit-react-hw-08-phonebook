import { Button, Grid } from "@mui/material";
import { Logout } from "@mui/icons-material";
import l from "../Layout/Layout.module.css";

import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={4}
    >
      {name && <h3>{name}</h3>}
      <Button
        onClick={() => dispatch(authOperations.logOut())}
        variant="contained"
        color="success"
        className={l.nav}
      >
        <Logout />
        LogOut
      </Button>
    </Grid>
  );
}

export default UserMenu;
