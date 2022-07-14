import React from 'react';
//import mainImg from '../icons/pexels-jess-bailey-designs-788946.jpg'
import s from './HomeView.module.css'

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundImage: `url(${mainImg})`,
    //backgroundRepeat: 'no-repeat',
   // backgroundSize: 'cover',
  },
  title: {
    fontWeight: 500,
    fontSize: 18,
    textAlign: 'center',
  },
};




const HomeView = () => (
  <div style={styles.container} >
 <div style={styles.title}  >
   <h1>Ви на головній сторінці нашого сервісу</h1>
 </div>
 </div>
);

export default HomeView;