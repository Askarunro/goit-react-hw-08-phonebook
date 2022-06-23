import { useState, useEffect } from 'react';
import { useLoginUserMutation } from "..//redux/api/usersApi"
import { useDispatch } from "react-redux";
import { myToken } from "..//redux/reduce/filter";


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

export default function LoginView() {

  const dispatch = useDispatch();

    const [loginUser] = useLoginUserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');


  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
    // dispatch(myToken(token));
  }, [token]);

  // useEffect(() => {
  //   if (localStorage.getItem("token") !== null) {
  //     const cont = localStorage.getItem("token");
  //     const parsedContacts = JSON.parse(cont);
  //     setToken([...parsedContacts]);
  //   }
  // }, token);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const formSubmitHandler = async (values) => {
   const res =  await loginUser(values);
    try{
        if(res.data.token){
        return setToken(res.data.token)
        }
        alert(`Error status ${res.error.status}, message: not found email or password`)
    }catch{
      alert(`Error status ${res.error.status}, message: not found email or password`)
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
   }

  const handleSubmit = e => {
    e.preventDefault();
    formSubmitHandler({ email, password });
    // dispatch(myToken(token))
    // dispatch(myToken(''))
    reset()
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}