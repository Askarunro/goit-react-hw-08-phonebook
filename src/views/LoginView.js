import { useState, useEffect } from "react";
import { useLoginUserMutation } from "..//redux/api/usersApi";
import { useDispatch } from "react-redux";
import { TextField, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  let navigate = useNavigate();

  const [loginUser] = useLoginUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

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

  const formSubmitHandler = async (values) => {
    const res = await loginUser(values);
    try {
      if (res.data.token) {
        setToken(res.data.token);
        return navigate("/", { replace: true });
      }
      alert(`Error status ${res.error.status}, message: not found email or password`);
    } catch {
      alert(`Error status ${res.error.status}, message: not found email or password`);
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmitHandler({ email, password });
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <Grid container direction="column" justifyContent="space-between" alignItems="center" gap={4}>
          <h1>Login page</h1>
          <TextField required label="Email" type="email" name="email" value={email} onChange={handleChange} />
          <TextField required label="Password" type="password" name="password" value={password} onChange={handleChange} />
          <Button type="submit" variant="outlined" color="success" size="large">
            Ok
          </Button>
        </Grid>
      </form>
    </div>
  );
}
