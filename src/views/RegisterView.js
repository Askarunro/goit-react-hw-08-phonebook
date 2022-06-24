import { useState } from "react";
import { useRegisterUserMutation } from "..//redux/api/usersApi";
import { TextField, Button, Grid, Alert, Stack, AlertTitle } from "@mui/material";
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

export default function RegisterView() {
  const [registerUser, isSuccess, isError] = useRegisterUserMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const formSubmitHandler = async (values) => {
    const res = await registerUser(values);
    try {
      if (res.data.token) {
        return navigate("/");
      }
      return console.log(isError);
    } catch {
      return console.log(isError);
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formSubmitHandler({ name, email, password });
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <Grid container direction="column" justifyContent="space-between" alignItems="center" gap={4}>
          <h1>Rergister page</h1>
          <TextField required label="Name" type="text" name="name" value={name} onChange={handleChange} />
          <TextField required label="Email" type="email" name="email" value={email} onChange={handleChange} />
          <TextField required label="Password" type="password" name="password" value={password} onChange={handleChange} />
          <Button type="submit" variant="outlined" color="success" size="large">
            Ok
          </Button>
        </Grid>

        {/* <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
       
        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        
        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Ok</button> */}
      </form>
      {/* {isSuccess && <Alert variant="filled" severity="success">
        This is a success alert — check it out!
      </Alert>} */}
    </div>
  );
}
