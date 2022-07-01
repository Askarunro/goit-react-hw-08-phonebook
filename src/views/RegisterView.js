import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [token, setToken] = useState('');

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
  }, [token]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (data) => {
    dispatch(authOperations.register(data));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          gap={4}>
          <h1>Rergister page</h1>
          <TextField
            required
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <TextField
            required
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <TextField
            required
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Button type="submit" variant="outlined" color="success" size="large">
            Ok
          </Button>
        </Grid>
      </form>
    </div>
  );
}
