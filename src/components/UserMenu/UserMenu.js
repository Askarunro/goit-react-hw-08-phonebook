import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

import { Logout } from '@mui/icons-material';
import l from '../Layout/Layout.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(authSelectors.getUserName);

  const handleClick = () => {
    dispatch(authOperations.logOut());
    navigate('/');
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={4}>
      {user && <h3>{user.email}</h3>}
      <Button
        onClick={handleClick}
        variant="contained"
        color="success"
        className={l.nav}>
        <Logout />
        LogOut
      </Button>
    </Grid>
  );
}

export default UserMenu;
