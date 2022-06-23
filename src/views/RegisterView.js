import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';
import { useRegisterUserMutation } from "..//redux/api/usersApi"


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
  const [loginUser, isSuccess] = useRegisterUserMutation();
  // console.log(useRegisterUserMutation)
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const formSubmitHandler = async (values) => {
    const res =  await loginUser(values);
     try{
         if(res.data.token){
          return console.log('Ok')
         }
         console.log('problem')
     }catch{
         console.log('problem')
     }
   };

   const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
   }

  const handleSubmit = e => {
    e.preventDefault();
    formSubmitHandler({ name, email, password });
    reset()
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

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

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}