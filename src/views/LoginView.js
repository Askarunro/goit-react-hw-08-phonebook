import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          gap={4}
        >
          <h1>Login page</h1>
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
