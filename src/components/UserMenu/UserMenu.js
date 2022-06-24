import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { searchContact } from "..//../redux/reduce/filter";
import { useGetUsersQuery, useLogoutUserMutation } from "..//../redux/api/usersApi";
import { useSelector } from "react-redux";
import { NavLink, useNavigate} from "react-router-dom";

function UserMenu() {
  const [logoutUser] = useLogoutUserMutation();
  const { data: user } = useGetUsersQuery();
  let navigate = useNavigate()

  // const token = useSelector((state) => state.token);

  const logoutClick = async () => {
    const res = await logoutUser();
    try {
    } catch {}
  };

  const handleClick = (e) => {
    logoutClick();
    localStorage.setItem("token", JSON.stringify(""));
    // navigate(-1)
    navigate("/users/login", { replace: true });
  };
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" gap={4}>
      {user && <h3>{user.email}</h3>}
      <Button onClick={handleClick} variant="contained" color="success">
        LogOut
      </Button>
    </Grid>
  );
}

export default UserMenu;
