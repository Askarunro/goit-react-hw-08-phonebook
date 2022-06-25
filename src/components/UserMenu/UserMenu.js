import { Button, Grid } from "@mui/material";
import { useGetUsersQuery, useLogoutUserMutation } from "..//../redux/api/usersApi";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import l from "../Layout/Layout.module.css";

function UserMenu() {
  const [logoutUser] = useLogoutUserMutation();
  const { data: user } = useGetUsersQuery();
  let navigate = useNavigate();

  const logoutClick = async () => {
    const res = await logoutUser();
    try {
    } catch {}
  };

  const handleClick = (e) => {
    logoutClick();
    localStorage.setItem("token", JSON.stringify(""));
    navigate("/users/login", { replace: true });
  };
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" gap={4}>
      {user && <h3>{user.email}</h3>}
      <Button onClick={handleClick} variant="contained" color="success" className={l.nav}>
        <Logout />
        LogOut
      </Button>
    </Grid>
  );
}

export default UserMenu;
